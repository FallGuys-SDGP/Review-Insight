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

# getting product reviews from asin
def queryReviews(asin,dynamodb=None):
  
  if not dynamodb:
    dynamodb = boto3.resource('dynamodb',region_name='ap-south-1')

  table = dynamodb.Table('Reviews')
  
  response = table.query(
    KeyConditionExpression=Key('asin').eq(asin) 
  )
  return response['Items']


def handler(event, context):
  # loading from S3 buckets 
  bucket ='review-insight-bucket'
  pipe_line = "serialized_pipeline_model_tfid.pkl"

  asin = event['pathParameters']['asin']
  queryResponse = queryReviews(asin)
  column = ['reviewText']
  row = []
  # adding all review text for a product to  list
  for query in queryResponse:
    query['reviewText']
    row.append(query['reviewText'])
  #converting to data frame
  df_reviews = pd.DataFrame(row,columns=column)  

  x = df_reviews['reviewText']  

  s3 = boto3.resource('s3')
  my_pipeline = pickle.loads(s3.Bucket(bucket).Object(pipe_line).get()['Body'].read()) 

  y_predict = my_pipeline.predict(x.values.astype('U'))


  df_reviews['predict'] = y_predict 

  json_predict_resposnse = df_reviews.to_json(orient='records') 
  parsed = json.loads(json_predict_resposnse) # to avoid  \\ in response
  

  #json_predict_resposnse= []
  # c = 0
  # for item in x:
  #   predict_sentence = item, " =>  ", y_predict[c]
  #   json_predict_resposnse.append(predict_sentence)
  #   c = c+1

  # return_statement =  json_predict_resposnse
  return_statement =  parsed,"  => " , json.dumps(row) # list to JSON


                     
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(return_statement) 
  }