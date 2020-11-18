import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder

def null_processing(dataset,option):
  try:
    
    null_columns=[ i for i in dataset if dataset[f"{i}"].isnull().sum()>0 ]
    object_col=[i for i in null_columns if dataset[f"{i}"].dtype=='object']
  
  except Exception as e:
    return -1,e,dataset
  
  try:
    for i in object_col:
      dataset[f"{i}"].fillna(method='ffill',inplace=True)
  except Exception as e:
    return -1,e,dataset

  try:
    if (option=="mean"):
      dataset.fillna(dataset.mean(),inplace=True)
    if (option=="median"):
      dataset.fillna(dataset.median(),inplace=True)
    if (option=="mode"):
      dataset.fillna(dataset.mode(),inplace=True)

  except Exception as e:
    return -1,e,dataset

  return 0,'DONE',dataset


def encoding(dataset):
  try:
    le=LabelEncoder()
  
    if dataset['target'].dtype=='object':
      y=dataset['target'].values
      y=le.fit_transform(y)
    else:
      y=dataset['target'].values
  except Exception as e:
    return -1,e,dataset
  
  try:
    dataset.drop(['target'],inplace=True,axis=1)
    dataset=pd.get_dummies(dataset,columns=None,drop_first=True)
    X=dataset.iloc[:,:].values
  except Exception as e:
    return -1,e,dataset
  
  return 0,'DONE',dataset


