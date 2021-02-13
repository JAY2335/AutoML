import requests as req
import json
# with open('iris.json') as f:
#     global data
#     data = json.load(f)
# import pandas as pd
# dataset = pd.read_csv('test_iris.csv')
# dum_data = dataset.to_json(orient='columns')
# print(dum_data)

headers = \
{
    'key': '-Lt_tWbTpuvtgkTHmhk9LA',
    'content_type': 'application/json'
}
res = req.post(url="https://fat-is-hell.herokuapp.com/api/preprocess?mode=mean",headers=headers, json=DUMMY_DATA)
print(res.status_code)
print(res.content)
# 'content_length', 'content_type', 'filename', 'headers', 'mimetype', 'mimetype_params', 'name', 'save', 'stream'
