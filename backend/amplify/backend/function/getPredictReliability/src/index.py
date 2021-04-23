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
  count_neg = 0
  count_neu = 0
  count_pos = 0
  for index, row in df_feature.iterrows():
    if(len(row['reviewText'])==0):
        df_feature.loc[index, feature+'_label'] = 'NA'
    else:
        prdict = my_sentiment_pipeline.predict(row['reviewText'])
        pos=0
        neu=0
        neg=0
        for item in prdict:
            if (item=="pos"):
                pos=pos+1
                count_pos=count_pos+pos
            elif (item=="neg"):
                neg=neg+1
                count_neg=count_neg+neg
            elif (item=="neu"):
                neu=neu+1
                count_neu=count_neu+neu
        var = {pos:"pos",neg:"neg",neu:"neu"}
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

  Build_quality = ["fit", "feel", "comfort", "soft"]
  sentences_with_Build = breakSentences(df_reviews, Build_quality)
  df_Build = sentiment(my_sentiment_pipeline, sentences_with_Build, "Build")
  df_reviews['Build_label'] = df_Build["Build_label"]

  Battery_quality = ["long lasting", "battery"]
  sentences_with_Battery = breakSentences(df_reviews, Battery_quality)
  df_Battery = sentiment(my_sentiment_pipeline, sentences_with_Battery, "Battery")
  df_reviews['Battery_label'] = df_Battery["Battery_label"]

  Price_quality= ["value", "cost", "worth", "Price", "expensive"]
  sentences_with_Price = breakSentences(df_reviews, Price_quality)
  df_Price = sentiment(my_sentiment_pipeline, sentences_with_Price, "Price")
  df_reviews['Price_label']=df_Price['Price_label']

  Connection_quality = ["static", "disconnect", "connection"]
  sentences_with_Connection = breakSentences(df_reviews, Connection_quality)
  df_Connection = sentiment(my_sentiment_pipeline, sentences_with_Connection, "Connection")
  df_reviews['Connection_label'] = df_Connection['Connection_label']

  Warranty_quality = ["guarantee", "warranty"]
  sentences_with_Warranty = breakSentences(df_reviews, Warranty_quality)
  df_Warranty = sentiment(my_sentiment_pipeline, sentences_with_Warranty, "Warranty")
  df_reviews['Warranty_label'] = df_Warranty['Warranty_label']

  Service_quality = ["Reimburse", "refund", "repair", "service ", "commitment"]
  sentences_with_Service = breakSentences(df_reviews, Service_quality)
  df_Service = sentiment(my_sentiment_pipeline, sentences_with_Service, "Service")
  df_reviews['Service_label'] = df_Service['Service_label']

  Shipping_quality = ["delivery", "shipping", "duration", "late", "charge", "fee"]
  sentences_with_Shipping = breakSentences(df_reviews, Shipping_quality)
  df_Shipping = sentiment(my_sentiment_pipeline, sentences_with_Shipping, "Shipping")
  df_reviews['Shipping_label'] = df_Shipping['Shipping_label']

  total_sentiment = my_sentiment_pipeline.predict(x.values.astype('U'))
  totalPositive = (total_sentiment == "pos").sum()
  totalNegative = (total_sentiment == "neg").sum()
  totalNeutral = (total_sentiment == "neu").sum()

  json_predict_resposnse = df_reviews.to_json(orient='records') 
  parsed = json.loads(json_predict_resposnse) # to avoid  \\ in response

  df_reviews['Audio_label'] = df_reviews['Audio_label'].replace('NA', np.NaN)
  df_reviews['Build_label'] = df_reviews['Build_label'].replace('NA', np.NaN)
  df_reviews['Battery_label'] = df_reviews['Battery_label'].replace('NA', np.NaN)
  df_reviews['Price_label'] = df_reviews['Price_label'].replace('NA', np.NaN)
  df_reviews['Connection_label'] = df_reviews['Connection_label'].replace('NA', np.NaN)
  df_reviews['Warranty_label'] = df_reviews['Warranty_label'].replace('NA', np.NaN)
  df_reviews['Service_label'] = df_reviews['Service_label'].replace('NA', np.NaN)
  df_reviews['Shipping_label'] = df_reviews['Shipping_label'].replace('NA', np.NaN) 

  return_statement =  {
    "statistics": {
      "totalReviews": int((df_reviews.shape[0])),
      "totalReal": int((df_reviews['predict']=='Real').sum()),
      "totalFake": int((df_reviews['predict']=='Fake').sum()),
      "totalPositive": int(totalPositive),
      "totalNegative": int(totalNegative),
      "totalNeutral": int(totalNeutral),
      "audioSentiment": df_reviews['Audio_label'].mode().to_dict(),
      "buildSentiment": df_reviews['Build_label'].mode().to_dict(),
      "batterySentiment": df_reviews['Battery_label'].mode().to_dict(),
      "priceSentiment": df_reviews['Price_label'].mode().to_dict(),
      "connectionSentiment": df_reviews['Connection_label'].mode().to_dict(),
      "warrantySentiment": df_reviews['Warranty_label'].mode().to_dict(),
      "serviceSentiment": df_reviews['Service_label'].mode().to_dict(),
      "shippingSentiment": df_reviews['Shipping_label'].mode().to_dict()
    },
    "reviewData": parsed
  }
         
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(return_statement) 
  }