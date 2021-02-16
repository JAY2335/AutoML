from flask import Flask, request, jsonify
import os
import pandas as pd
from flask_cors import CORS, cross_origin
from Preprocess.Preprocessing import *
from Ml_models.Models import *
import json as j
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
KEY = '-Lt_tWbTpuvtgkTHmhk9LA'

@app.route('/api/preprocess', methods=['POST'])
def preprocess():
    """Endpoint function which receives dataset and particular mode and 
    handles preprocessing foundations(by Preprocess module) on the dataset 
    and returns it back.

    Args:
        OPTION -> query string
        dataset json from POST request

    Returns:
        Dictionary Object
    Schema:
    {
        'result':msg,
        'file', json
    }
"""
    if request.headers['content_type'] != 'application/json':
        return {'result': 'JAY'}
    try:
        OPTION = request.args['mode'].lower()
    except:
        return {'result': 'no option provided','file': {}}
    FILE_DATA = request.get_json(force=True)
    DATASET = pd.DataFrame(FILE_DATA)
    ORIENT = 'columns'
    if OPTION == 'none':
        try:
            json = eval(DATASET.to_json(orient=ORIENT))
        except Exception as e:
            return {'result':str(e), 'file':{}}
        if null_checking(DATASET) == True:
            return {'result': 'YES', 'file': json}
        else:
            code, msg, final_dataset =  encoding(DATASET)
            json = eval(final_dataset.to_json(orient=ORIENT))
            return {'result': 'NO', 'file': json}
    elif OPTION == 'mean' or OPTION == 'median' or OPTION == 'mode':
        DATASET = Nan_converter(DATASET)
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


@app.route('/api/train', methods=['POST'])
def train():
    """Endpoint function to receive the dataset, 
        completes ETL piplelines for various models (via Ml_models module)
        and return accuracies of each model.

        Args:
            dataset json from POST request

        Returns:
            Dictionary Object
        Schema:
        {
            'result': msg,
            'score':{
                'model_name_1':89.8%,
                ...
            }
        }
"""
    if request.headers['content_type'] != 'application/json':
        return {'result': 'Invalid Content Type'}
    FILE_DATA = request.get_json(force=True)
    DATASET = pd.DataFrame(FILE_DATA)
    code, msg, scores = train_preprocess(DATASET) # UD
    print({'result': msg, 'score': scores})
    return {'result': msg, 'score': scores}


if __name__ == "__main__":
    app.run()