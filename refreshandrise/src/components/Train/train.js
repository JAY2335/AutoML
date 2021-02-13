import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Submitone,{rone} from '../Upload/Submitone'

import Submittwo,{rtwo} from '../Upload/Submittwo'




var r;
function Train() {
    var data=[]
    var label=[]
    console.log(rone)
    
   /* for (var i = 0; i < localStorage.length; i++){
         localStorage.getItem(localStorage.key(i));
    }*/
    console.log(localStorage)
    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {
            const element = localStorage[key];
            console.log(element)
            label.push(key)
            data.push(parseFloat(element))

            
        }
    }
    
    
    
    
    return (
        <div>
            <h1>YOUR MODEL IS TRAINED</h1>
            <h6 className="data">{rone}</h6>
          
            <Bar data={{
                labels:label,
        datasets: [{
            label:"Percentage",
            barPercentage: 0.5,
            barThickness: 100,
            maxBarThickness: 100,
            minBarLength: 50,
            data: data
        }]
        
    }}
  width={500}
  height={500}
  options={{ maintainAspectRatio: false }}
  
/>
            

            

            
        </div>
    )
}

export default Train
