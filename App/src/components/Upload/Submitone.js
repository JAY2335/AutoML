import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';

import {sub_refactor,response_refactor} from '../impfunc'

import {result, trainingdatasetone} from "../Upload/uploadtwo"
import { useHistory } from "react-router-dom";


var rone;
function Submitone() {
    let history = useHistory();
    
   
    
    const [scan, setScan] = useState(false)
    
    function training(rone){
        
        
        
        fetch("https://fat-is-hell.herokuapp.com/api/train", {
        method: 'POST',
        mode:'cors',
        body:JSON.stringify(response_refactor(trainingdatasetone)),
        json: JSON.stringify(response_refactor(trainingdatasetone)),
        headers:new Headers({'content-type': 'application/json'})
            
        })
        .then(res=>{
            
            console.log(res)
            
            res.json().then(data=>{
                
                rone=data.score
                console.log(data.score,rone)
                for (const key in data.score) {
                    if (Object.hasOwnProperty.call(data.score, key)) {
                        const element = data.score[key];
                        localStorage.setItem(key,element)
                        
                    }
                }
                console.log(localStorage)
                history.push('/train')
            })
            
            
            
            setScan(true)
            console.log(scan)
            
        })
        .catch(err=>{
            console.log(err)
        })

        


    }
    return (
        <div>
            <a className="btn btn-success"  onClick={()=>{training(rone)}}   >START TRAINING</a>
            <h6>{rone}</h6>
           
            
            
        </div>
    )
}

export default Submitone
export {rone}

