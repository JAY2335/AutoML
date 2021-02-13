

 function sub_refactor(dataset){
    //console.log("DATASET",dataset)
    let row = new Object(dataset[0]);
    let key = Object.keys(row);
    let result =new Object();
    for(var i=0; i<key.length;i++){
        result[key[i]] = [];
    }

    dataset.forEach(element => {
        for(var key in element){
            result[key].push(element[key]);
        }
    });

    console.log("Subrefactor result:",result);
    return result
}

function response_refactor(dataset){
    console.log(dataset)
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

    console.log("Response:",result);
    return result;
}

function arrange(dataset){
    var result=[]
    let keys=Object.keys(dataset)
    var list=[]
    for (const k in dataset) {
        if (Object.hasOwnProperty.call(dataset, k)) {
            const element = dataset[k];
            console.log(element)
            
            var sublist=[]
            
            
            for (const l in element) {

                if (Object.hasOwnProperty.call(element, l)) {
                    const subelement = element[l];
                    sublist.push(subelement)
              }
            

            }
            list.push(sublist)
            
            
        }
    }
    for(let i=0;i<list[0].length;i++){
        var subresult=new Object()

        for (let j=0;j<list.length;j++){
            subresult[keys[j]]=list[j][i]



    }
    result.push(subresult)
    
}
console.log("Arrange",result)
return result
}

export {sub_refactor,response_refactor,arrange}




