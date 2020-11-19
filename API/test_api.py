import requests as req
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
res = req.post(url="http://127.0.0.1:5000/api/preprocess?mode=median",headers=headers, json=DUMMY_DATA)
print(res.status_code)
print(res.json())
# 'content_length', 'content_type', 'filename', 'headers', 'mimetype', 'mimetype_params', 'name', 'save', 'stream'
