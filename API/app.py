from flask import Flask, request, jsonify
import os
import pandas as pd
from flask_cors import CORS, cross_origin
from Preprocess.Preprocessing import *
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
KEY = '-Lt_tWbTpuvtgkTHmhk9LA'

@app.route('/api/preprocess', methods=['POST'])
def preprocess():
    print(request.headers['Content_type'])
    if request.headers['content_type'] != 'application/json':
        return {'result': 'Invalid Content Type'}
    try:
        OPTION = request.args['mode'].lower()
    except:
        return {'result': 'no option provided','file': {}}
    FILE_DATA = dict(request.get_json(force=True))
    DATASET = pd.DataFrame(FILE_DATA)
    ORIENT = 'columns'
    if OPTION == 'none':
        json = eval(DATASET.to_json(orient=ORIENT))
        return {'result': 'NO', 'file': json} if null_checking(DATASET) else {'result': 'YES', 'file': json}
    elif OPTION == 'mean' or OPTION == 'median' or OPTION == 'mode':
        code, msg_1, dataset = null_processing(DATASET, OPTION.lower()) # UD
        if code == 0:
            code, msg, final_dataset =  encoding(dataset) # UD
            json = eval(final_dataset.to_json(orient=ORIENT))
            return {'result': msg, 'file': json}
        else:
            json = eval(dataset.to_json(orient=ORIENT))
            return {'result': msg_1, 'file': json}
    else:
        return {'result': 'Invalid Option', 'file': {}}
    return {'result': 'Invalid Option', 'file': {}}

if __name__ == "__main__":
    app.run(debug=True)