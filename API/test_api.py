import requests as req
import json
with open('iris.json') as f:
    global data
    data = json.load(f)
# import pandas as pd
# dataset = pd.read_csv('test_iris.csv')
# dum_data = dataset.to_json(orient='columns')
# print(dum_data)
DUMMY_DATA = \
{
    'Students': {0:'Armin', 1:'Miguel', 2:'Rossum'},
    'Results': {0:99, 1:98, 2:100},
    'target': {0:0, 1:0,2:1}
}
headers = \
{
    'key': '-Lt_tWbTpuvtgkTHmhk9LA',
    'content_type': 'application/json'
}
res = req.post(url="http://127.0.0.1:5000/api/train",headers=headers, json=data)
print(res.status_code)
print(res)
# 'content_length', 'content_type', 'filename', 'headers', 'mimetype', 'mimetype_params', 'name', 'save', 'stream'
