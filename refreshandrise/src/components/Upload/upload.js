import React, { useState,useEffect } from 'react'
import csv from 'csv'
import * as XLSX from 'xlsx'

import DataTable from 'react-data-table-component';
import {sub_refactor} from '../impfunc'
import axios from 'axios'
import Mode from '../Upload/mode'
import react from 'react-dom'
let result=[];

function Upload() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [num, setNum]=useState(0)
  const [scan,setScan]=useState(false)

  useEffect(()=>{
    document.title="AutoML"
  },[])
  


  

 function preprocess(str){
    let lines=str.split('\n')
    
    let columnname=lines[0].split(',')
    lines.slice(1,lines.length).forEach(line=> {
        let linelist=line.split(",")
        let tempJson=new Object();
        for(let i=0;i<linelist.length;i++){
            tempJson[columnname[i]]=linelist[i];

        }
    result.push(tempJson)
        
    });

    console.log("success",result)
    
      
     // console.log("Success")
      
      /*axios.post('https://8f7114180114.ngrok.io/api/preprocess?mode=none',sub_refactor(result) )
      .then(res=>{
        console.log("RESPONSE",res.result)
        if(res.result=='YES'){
          setScan(true)
        }
        console.log("no update")
        
      })
      .catch(err=>{
        console.log(err)
        console.log("No update")
      })*/
      
    const DUMMY=[{
      "first_name": "Constantin",
      "last_name": "Langsdon",
      "email": "clangsdon0@hc360.com",
      "gender": "Male",
      "age": "96"
     }]
    
     fetch("https://a46b8bcd38ab.ngrok.io/api/preprocess?mode=none", {
        method: 'POST',
        body: JSON.stringify(sub_refactor(DUMMY)),
        json: JSON.stringify(sub_refactor(result)),
        headers:new Headers({'content-type': 'application/json'})
            
        }).then(response => response.json())
        .then(data => console.log("Gyhhw",data));
      
    
    

}





    const onfileupload=(e)=>{
        e.preventDefault()
        let files=e.target.files[0];
        
        
        const reader = new FileReader()
        //console.log(reader.readAsDataURL(files))
        //console.log(reader.readAsArrayBuffer(files))
        //console.log(reader.readAsText(files))
        //console.log(reader.readAsBinaryString(files))
        reader.onload=(e)=>{
            //console.log("data",e.target.result)
            const bstr=e.target.result
            const wb=XLSX.read(bstr,{type:'binary'})
            const wsname=wb.SheetNames[0]
            const ws = wb.Sheets[wsname];
            //console.log(reader.readAsBinaryString(files));
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            //console.log(data);
            
           
            // console.log(num)
           //preprocess(data)
           
           e.stopPropagation()

        }
        console.log(reader.readAsBinaryString(files));
        
        
        
        

      
    }

    const sayHi=(e)=>{
      console.log("hi")
      onfileupload(e)
    }
    

    return (
        <div>
            <form>
                <h2>Upload your csv file here</h2>
                <div>
                  

                <input type="file" name="file" accept=".csv" required onChange={sayHi}></input>

                              
                </div>
            </form>
            {scan?<h1><Mode></Mode></h1>:<h1>U may not proceed</h1>}
            
        </div>
    )
}

export default Upload
export {result}

