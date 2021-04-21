

'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "ap-south-1" });

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ap-south-1" });

    let responseBody = "";
    let statusCode = 0;

    const { asin } = event.pathParameters;
    const params = {
        TableName: "specification",
        Key: {
            asin: asin
        }
    }

    try {
        const data = await documentClient.get(params).promise();
        responseBody = JSON.stringify(data.Item);
        statusCode = 200;
    } catch (err) {
        responseBody = "Unable to get product data";
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "myHeader": "test",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "content-type": "text/html"
        },
        body: responseBody
    }
    return response;
}

