const DUMMY_DATA_1
 = {
    students: [1.0, 5.3, 1.0, 2.4, 1.2, 0.6,2, 2, 4],
    results: [1, 4, 100, 12, 13, 8, 6, 7, 8],
    target: [1, 0, 1, 1, 0, 1, 2, 1, 1]
}

const DUMMY_DATA_2 =     [
    {
     "first_name": "Constantin",
     "last_name": "Langsdon",
     "email": "clangsdon0@hc360.com",
     "gender": "Male",
     "age": "96"
    },
    {
     "first_name": "Norah",
     "last_name": "Raison",
     "email": "nraison1@wired.com",
     "gender": "Female",
     "age": "32"
    },
    {
        "first_name": "Norah",
        "last_name": "Raison",
        "email": "nraison1@wired.com",
        "gender": "Female",
        "age": "32"
       },
       {
        "first_name": "Norah",
        "last_name": "Raison",
        "email": "nraison1@wired.com",
        "gender": "Female",
        "age": "32"
       },
   ];
function api_post(url, data){
    const headers = {
        Key: '-Lt_tWbTpuvtgkTHmhk9LA',
        "content_type": 'application/json'
    };
    fetch(url, {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(data),
        json: JSON.stringify(data),
        headers:new Headers({'content-type': 'application/json'})
            
        }).then(response => response.json())
        .then(data => console.log(data));
}

const DUMMY_DATA_3
 = {
    students: {0:1, 1:0, 2:5.3, 3: "null"},
    results: {0:1, 1:4, 2:100},
    target: {0:'iris', 1:'marigold', 2:'sunflower'}
}

function response_refactor(dataset){
    let keys = Object.keys(dataset);
    // console.log(keys);
    let result = new Object();
    for(var i=0; i<keys.length;i++){
        result[keys[i]] = [];
    }
    for (const key in dataset) {
        if (dataset.hasOwnProperty(key)) {
            const j = dataset[key];

            // console.log(j);
            for (const val in j) {
                if (j.hasOwnProperty(val)) {
                    const e_val = j[val];
                    result[key].push(e_val);
                }
            }
        }
    }

    console.log(result);

}

function sub_refactor(dataset){
    const row = new Object(dataset[0]);
    const key = Object.keys(row);
    const result =new Object();
    for(var i=0; i<key.length;i++){
        result[key[i]] = [];
    }
    dataset.forEach(element => {
        for(var key in element){
            result[key].push(element[key]);
        }
    });
    console.log("subrefactor", result);
    return result
}


function csv_json_refactor(path){
    let csvToJson = require('convert-csv-to-json');
    let fileInputName = path;
    let json = csvToJson.formatValueByType().getJsonFromCsv(fileInputName);
    return sub_refactor(json);
    
}


// sub_refactor(DUMMY_DATA_2)

// api_post('http://127.0.0.1:5000/api/preprocess?mode=mean', csv_json_refactor('test_iris.csv'))
// api_post('https://fat-is-hell.herokuapp.com/api/train', DUMMY_DATA_1)
response_refactor(DUMMY_DATA_3)

// user gives you data
// mode=None
// filing 
// mode=mean or median or mode
// npm install convert-csv-to-json --save