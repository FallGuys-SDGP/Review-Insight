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
import nltk
from nltk.tokenize import sent_tokenize
from nltk.tokenize import word_tokenize
nltk.data.path.append("/tmp")
nltk.download("punkt", download_dir = "/tmp")

# getting product reviews from asin
def queryReviews(asin,dynamodb=None):
  
  if not dynamodb:
    dynamodb = boto3.resource('dynamodb',region_name='ap-south-1')

  table = dynamodb.Table('Reviews')
  
  response = table.query(
    KeyConditionExpression=Key('asin').eq(asin) 
  )
  return response['Items']

def breakSentences(df_reviews, word_array):
  sentence_all = []
  for index, row in df_reviews.iterrows():
    sentences_with_feature = []
    for sen in sent_tokenize(str(row['reviewText'])):
        l = word_tokenize(sen)
        if len(set(l).intersection(word_array))>0:
            sentences_with_feature.append(sen)
    sentence_all.append(sentences_with_feature)
  list_of_tuples = list(zip(sentence_all)) 
  df_sentences = pd.DataFrame(list_of_tuples,columns = ['reviewText'])
  return df_sentences

def sentiment(my_sentiment_pipeline, sentenceArray, feature):
  df_feature = sentenceArray
  count_ng = 0
  count_nu = 0
  count_po = 0
  for index, row in df_feature.iterrows():
    if(len(row['reviewText'])==0):
        df_feature.loc[index, feature+'_label'] = 'NA'
    else:
        prdict = my_sentiment_pipeline.predict(row['reviewText'])
        po=0
        nu=0
        ng=0
        for item in prdict:
            if (item=="pos"):
                po=po+1
                count_po=count_po+po
            elif (item=="neg"):
                ng=ng+1
                count_ng=count_ng+ng
            elif (item=="neu"):
                nu=nu+1
                count_nu=count_nu+nu
        var = {po:"po",ng:"ng",nu:"nu"}
        sen = var.get(max(var))
        df_feature.loc[index, feature+'_label'] = sen
  return df_feature

def handler(event, context):
  # loading from S3 buckets 
  bucket ='review-insight-bucket'
  pipe_line = "serialized_pipeline_model_tfid.pkl"
  sentiment_pipe_line = "serialize_sentiment_model.pkl"

  asin = event['pathParameters']['asin']
  queryResponse = queryReviews(asin)
  column = ['asin', 'title', 'brand',	'overall', 'vote',	'verified',	'summary',	'reviewerID',	'unixReviewTime',	'reviewText']
  row = []
  # adding all review text for a product to  list
  for query in queryResponse:
    queryColumns = query['asin'], query['title'], query['brand'], query['overall'], query['vote'], query['verified'], query['summary'], query['reviewerID'], query['unixReviewTime'], query['reviewText']
    row.append(queryColumns)
  #converting to data frame
  df_reviews = pd.DataFrame(row,columns=column)  

  x = df_reviews['reviewText']  

  s3 = boto3.resource('s3')
  my_pipeline = pickle.loads(s3.Bucket(bucket).Object(pipe_line).get()['Body'].read()) 

  y_predict = my_pipeline.predict(x.values.astype('U'))

  df_reviews['predict'] = y_predict 

  my_sentiment_pipeline = pickle.loads(s3.Bucket(bucket).Object(sentiment_pipe_line).get()['Body'].read()) 
  Audio_quality = ["immersive", "satisfaction", "static", "sound"]
  sentences_with_Audio = breakSentences(df_reviews, Audio_quality)
  df_Audio = sentiment(my_sentiment_pipeline, sentences_with_Audio, "Audio")
  df_reviews['Audio_label'] = df_Audio["Audio_label"]

  json_predict_resposnse = df_reviews.to_json(orient='records') 
  parsed = json.loads(json_predict_resposnse) # to avoid  \\ in response
  
  return_statement =  parsed
         
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(return_statement) 
  }