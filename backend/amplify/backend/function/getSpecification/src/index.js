

'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "ap-south-1"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ap-south-1"});
  
  const params = {
    TableName: "specification",
    Key: {
      id: "ATH-AR5 Wired Headphones"
    }
  }

  try {
    const data = await documentClient.get(params).promise();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    
  }
}

