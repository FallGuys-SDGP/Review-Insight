'use strict'
const AWS = require('aws-sdk')
const https = require('https');

AWS.config.update({ region: "ap-south-1"})

exports.handler = async (event) => {
    const db = new AWS.DynamoDB( {apiVersion: "2012-10-08"})
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ap-south-1"});
    
    let responseBody = "";
    let statusCode = 0;
    let predictionResponse = "";
    let specificationResponse = "";

    const {asin} = event.pathParameters;

    const params = {
        TableName: "Product",
        Key: {
            asin: asin
        }
    }
    try {
        const data = await documentClient.get(params).promise();
        responseBody = JSON.stringify(data.Item);
        statusCode = 200;

        let predictDataString = '';
        
        predictionResponse = await new Promise((resolve, reject) => {
            const req = https.get("https://hv0flsfrw0.execute-api.ap-south-1.amazonaws.com/staging/prediction/" + asin, function(res) {
              res.on('data', chunk => {
                predictDataString += chunk;
              });
              res.on('end', () => {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify(JSON.parse(predictDataString))
                });
              });
            });
            
            req.on('error', (e) => {
              reject({
                  statusCode: 500,
                  body: 'Prediction response Error! Something went wrong!'
              });
            });
        });

        let specificationDataString = "";

        specificationResponse = await new Promise((resolve, reject) => {
            const req = https.get("https://762xa5wc39.execute-api.ap-south-1.amazonaws.com/staging/specification/" + asin, function(res) {
              res.on('data', chunk => {
                specificationDataString += chunk;
              });
              res.on('end', () => {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify(JSON.parse(specificationDataString))
                });
              });
            });
            
            req.on('error', (e) => {
              reject({
                  statusCode: 500,
                  body: 'Specification response Error! Something went wrong!'
              });
            });
        });
    } catch (err) {
        responseBody = "Unable to get product data";
        statusCode = 403;
    }

    // returning product asin with reviews with prediction
    responseBody = {
        asin: asin,
        predictionResult : JSON.parse(predictionResponse.body),
        specification: JSON.parse(specificationResponse.body)
    }

    const response = {
        statusCode : statusCode,
        headers: {
            "myHeader": "test",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "content-type": "text/html"
        },
        body: JSON.stringify(responseBody)
    }
    return response;
};
