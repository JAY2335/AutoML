import React,{useState} from 'react'

import {sub_refactor,response_refactor} from '../impfunc'

import {result, trainingdatasettwo} from "../Upload/mode"
import { useHistory } from "react-router-dom";
import '../Upload/submit.css'

var rtwo;
function Submittwo(props) {
    let history = useHistory();
    
   
    
    const [scan, setScan] = useState(false)
    console.log("tD on submit",trainingdatasettwo)
    const training=(rtwo)=>{
        
        fetch("https://fat-is-hell.herokuapp.com/api/train", {
        method: 'POST',
        mode:'cors',
        body:JSON.stringify(response_refactor(trainingdatasettwo)),
        json: JSON.stringify(response_refactor(trainingdatasettwo)),
        headers:new Headers({'content-type': 'application/json'})
            
        })
        .then(res=>{
            
            console.log(res)
            res.json().then(data=>{
                console.log("datascore",data.score)
                for (const key in data.score) {
                    if (Object.hasOwnProperty.call(data.score, key)) {
                        const element = data.score[key];
                        localStorage.setItem(key,element)
                        
                    }
                }
                console.log(localStorage)
                history.push('/train')
                
                

            })
            
            
        })
        .catch(err=>{
            console.log(err)
        })
        setScan(true)
        console.log(scan)


    }
    return (
        <div>
            <h1 class="alert-heading" style={{color:'rgba(228, 235, 23)'}}>Your model is ready for training!!!</h1>
            <a className="btn btn-outline-secondary training"  onClick={()=>{training(rtwo)}}   >START TRAINING</a>
            <br></br>
            <hr></hr>
            <hr></hr>
            
            
        </div>
    )
}

export default Submittwo
export {rtwo}