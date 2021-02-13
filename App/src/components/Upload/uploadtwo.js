import React,{useState} from 'react'
import { connect } from 'react-redux'
import ReactFileReader from 'react-file-reader';
import Mode from '../Upload/mode'
import axios from 'axios'
import { sub_refactor,response_refactor,arrange } from '../impfunc';
import DataTable from 'react-data-table-component';
import Submitone from "./Submitone"
import "../Upload/upload.css"


var trainingdatasetone;
var result=[]
var header=[]
function CsvRead(props) {
  
   const [scan, setScan] = useState(false)
   const [table,setTable]=useState(false)
   const [button,setButton]=useState(false)
   const{columns,setColumns,data,setData}=props
   
  
  var list=[]

   function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
  
  const handleFiles = files => {
    localStorage.clear()
    console.log(localStorage)
    var reader = new FileReader();
    reader.onload = function(e) {
    // Use reader.result
    var csv = reader.result;
    console.log(csv)
    var lines = csv.split("\r\n");
   
    
    
    header=lines[0].split(",");
    //headers[headers.length].replace("/r","")
    
    
    for(var i=1;i<lines.length-1;i++){
      var obj = {};
      var currentline=lines[i].split(",");
      for(var j=0;j<header.length;j++){

        var c=isNumeric(currentline[j])
        if(c){
            currentline[j]=parseFloat(currentline[j])
        }

          
        obj[header[j]] = currentline[j];
      }
      if (Object.values(obj).filter(x => x).length > 0) {
        list.push(obj);
      }
    
      result.push(obj);
      
      }  
      //return result; //JavaScript object
      console.log(result)
      const columns = header.map(c => ({
        name: c,
        selector: c,
      }));
      setColumns(columns)

      console.log("preLIST",list)
      setData(list)
      
       
   // console.log(result);

    
    
    /*axios.post("https://a46b8bcd38ab.ngrok.io/api/preprocess?mode=none",sub_refactor(result),headers)*/
    fetch("https://fat-is-hell.herokuapp.com/api/preprocess?mode=none", {
        method: 'POST',
        mode:'cors',
        body:JSON.stringify(sub_refactor(result)),
        json: JSON.stringify(sub_refactor(result)),
        headers:new Headers({'content-type': 'application/json'})
            
        })
        /*.then(response =>  console.log(response.json()))*/
        
     .then(res=>{
    
        res.json().then(data=>{
          console.log("DATA",data)
         
          
          
            console.log(data.result)
            if(data.result=="NO"){
            
                
                setTable(true)

                setButton(true)
                trainingdatasetone=data.file 
                console.log(trainingdatasetone)
                
            }
            else{
              setScan(true)
            }
            
        })
        
        
    })
    .catch(err=>{
        console.log(err)
    })


  }
  reader.readAsText(files[0]);
}

  
    return (
        <div className="body">
          <div className="uploadone">
      <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
        <button className='btn btn-outline-secondary upload'>Upload</button>
      </ReactFileReader>
      </div>
      
            
      {scan?<Mode columns={columns} setColumns={setColumns} data={data} setData={setData} />:null}
      {table?<DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
      />:null}

      {button?<Submitone ></Submitone>:null}


      

     
      
      </div>
    );
  }


export default CsvRead
export {result,trainingdatasetone}


