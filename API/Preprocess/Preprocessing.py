import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder
def null_checking(dataset):
  null_columns=[ i for i in dataset if dataset[f"{i}"].isnull().sum()>0 ]
  if (null_columns == []): 
    return False
  return True 

def null_processing(dataset, option):
  
  try:
    
    null_columns=[ i for i in dataset if dataset[f"{i}"].isnull().sum()>0 ]
    object_col=[i for i in null_columns if dataset[f"{i}"].dtype=='object']
     
  except Exception as e:
    return -1,str(e) + '[Error During Encoding]',dataset
  
  try:
    for i in object_col:
      dataset[f"{i}"].fillna(method='ffill',inplace=True)
      dataset[f"{i}"].fillna(method='bfill',inplace=True)
    
  except Exception as e:
    return -1,str(e) + '[Error During Encoding]',dataset

  try:
    X=dataset.iloc[:,:-1]
    y=pd.DataFrame(dataset['target'])
    if (dataset['target'].dtype!='object'):
      y.fillna(method='ffill',inplace=True)
      y.fillna(method='bfill',inplace=True)
    if (option=="mean"):
      X.fillna(dataset.mean(),inplace=True)
    if (option=="median"):
      X.fillna(dataset.median(),inplace=True)
    if (option=="mode"):
      X.fillna(dataset.median(),inplace=True)
    result=pd.concat([X,y],axis=1)

  except Exception as e:
    return -1,str(e) + '[Error During Filling]',dataset

  return 0,'DONE',result

def encoding(dataset):
  
  try:
    le=LabelEncoder()
  
    if dataset['target'].dtype=='object':
      y=dataset['target'].values
      y=le.fit_transform(y)
  except Exception as e:
    return -1,str(e) + '[Error During Encoding]',dataset
  
  try:
    #dataset.drop(['target'],inplace=True,axis=1)
    X=dataset.iloc[:,:-1]
    X=pd.get_dummies(X,columns=None,drop_first=True)
    #X=dataset.iloc[:,:].values
    y=pd.DataFrame(dataset['target'])
    result=pd.concat([X,y],axis=1)
    
  except Exception as e:
    return -1,str(e) + '[Error During Encoding]',dataset
  
  return 0,'DONE PREPROCESSING',result


