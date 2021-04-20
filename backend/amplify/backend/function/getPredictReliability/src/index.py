import json
import pandas as pd
import numpy as np
import pickle
import boto3
import os
import sys
from io import StringIO
from pprint import pprint
from boto3.dynamodb.conditions import Key, Attr

def queryReviews(asin,dynamodb=None):

  if not dynamodb:
    dynamodb = boto3.resource('dynamodb',region_name='ap-south-1')

  table = dynamodb.Table('Reviews')
  print(f"")

  # Expression attribute names can only reference items in the projection expression.
  response = table.query(
    KeyConditionExpression=Key('asin').eq(asin)
  )
  return response['Items']


def handler(event, context):

  bucket ='review-insight-bucket'
  pipe_line = "serialized_pipeline_model_tfid.pkl"
  
  asin = event['pathParameters']['asin']
  queryResponse = queryReviews(asin)

  s3 = boto3.resource('s3')

  my_pipeline = pickle.loads(s3.Bucket(bucket).Object(pipe_line).get()['Body'].read())

  return_statement = asin,queryResponse
                     
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(return_statement)
  }