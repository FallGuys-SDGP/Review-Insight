import json
import pandas as pd
import numpy as np
import pickle
import boto3
import os
import sys
from io import StringIO

def handler(event, context):
  bucket ='review-insight-bucket'
  pipe_line = "serialized_pipeline_model_tfid.pkl"
  reviews="10 Reviews only.csv"

  s3 = boto3.resource('s3')
  s3_client = boto3.client("s3")

  my_pipeline = pickle.loads(s3.Bucket(bucket).Object(pipe_line).get()['Body'].read())

  csvfile = s3_client.get_object(Bucket=bucket, Key=reviews)
  body = csvfile['Body']
  csv_string = body.read().decode('utf-8')

  df = pd.read_csv(StringIO(csv_string))

  print (" data:", str(df.shape))
  print(df.head())

  x=df['reviewText']
  prdict = my_pipeline.predict(x.values.astype('U'))
  c=0
  for item in x:
    print('|| '+prdict[c]+' || >',x[c],'\n')
    c=c+1

  pandas_version = pd.__version__
  numpy_version = np.__version__

  return_statement = 'Pandas Version: ', pandas_version, 'Numpy Version: ', numpy_version," my pickle", x[0]
                     
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(return_statement)
  }