import React,{useState} from 'react'
import '../Upload/mode.css'
import axios from 'axios'
import {sub_refactor,response_refactor,arrange} from '../impfunc'
import {result } from '../Upload/uploadtwo'
import DataTable from 'react-data-table-component';
import Submit from "./Submitone"
import Submittwo from './Submittwo'

var trainingdatasettwo;

var finalres=[]
var list=[]
var collist=[]
function Mode(props) {
    const [scan, setScan] = useState(false)
    var {columns, setColumns , data, setData,trainingdata}=props
    
    
    
    var x
    const handleChange=(e)=>{
        setColumns([])
        setData([])
        console.log(e.target.value)
        fetch(`https://fat-is-hell.herokuapp.com/api/preprocess?mode=${e.target.value}`, {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(sub_refactor(result)),
        json: JSON.stringify(sub_refactor(result)),
        headers:new Headers({'content-type': 'application/json'})
            
        })
        
        
        .then(res=>{
            console.log(res)
            finalres=res.json(0)
            console.log(finalres)

    
            finalres.then(dataset=>{
                console.log(dataset.result)
                if(dataset.result=="DONE PREPROCESSING"){
                
                    setScan(true)
                    console.log("SCan",scan)
                    trainingdatasettwo=dataset.file
                    console.log(trainingdatasettwo)
                    
                }
                for(x in dataset.file){
                    
                    collist.push({name:x,selector:x})
                    
                      

                }
               /* if (Object.values(dataset.file).filter(y => y).length > 0) {
                        
                    list.push(dataset.file);
                  }*/
                
                
                list=arrange(dataset.file)
                
                console.log("list",list)
                console.log("columns",collist)
                setColumns(collist)
                
                setData(list)
                
                

            })
            
            
        })
        .catch(err=>{
            console.log(err)
        })
        /*axios.post(`https://a46b8bcd38ab.ngrok.io/api/preprocess?mode=${e.target.value}`,sub_refactor(result))
        .then(res=>{
            if(res.result=="DONE"){
            setScan(true)
            console.log("API worked")
            }
            

        })
        .catch(err=>{
            console.log(err)
        })*/
        
        
        
        
    }
    return (
        <div>
            <div className="message">
            <div class="alert alert-success " role="alert">
             <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr></hr>
               <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>

            
               <div className="options">
            <form  onChange={handleChange}>
             <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"  value={"median"}/>
                  <label className="btn btn-outline-success" htmlFor="btnradio1">Median</label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" value={"mean"}  />
                  <label className="btn btn-outline-success" htmlFor="btnradio2">Mean</label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" value={"mode"} />
                 <label className="btn btn-outline-success" htmlFor="btnradio3">Mode</label>
                 </div>
           </form>
           </div>
                </div>
                </div>
            
          


            <div className="modes">
            <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
      />
            </div>
            
            


            
           
            


            
            

            {scan?<Submittwo ></Submittwo>:null}

            
            
        </div>
    )
}

export default Mode;
export {result,trainingdatasettwo}