const DUMMY_DATA_1
 = {
    Students: {0:'Armin', 1:'Miguel', 2:'Rossum'},
    Results: {0:99, 1:null, 2:100},
    target: {0:0, 1:0,2:1}
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
        body: JSON.stringify(data),
        json: JSON.stringify(data),
        headers:new Headers({'content-type': 'application/json'})
            
        }).then(response => response.json())
        .then(data => console.log(data));
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
    console.log(result);
    return result
}


function csv_json_refactor(path){
    let csvToJson = require('convert-csv-to-json');
    let fileInputName = path;
    let json = csvToJson.formatValueByType().getJsonFromCsv(fileInputName);
    return sub_refactor(json);
    
}


sub_refactor(DUMMY_DATA_2)

// api_post('http://127.0.0.1:5000/api/preprocess?mode=mean', csv_json_refactor('test_iris.csv'))
// api_post('http://127.0.0.1:5000/api/preprocess?mode=mean', DUMMY_DATA_1)

// user gives you data
// mode=None
// filing 
// mode=mean or median or mode
// npm install convert-csv-to-json --save