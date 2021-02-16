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
            <h1 style={{color:"white",paddingBottom:'10px'}}>Models Accuracies</h1>
            <h6 className="data">{rone}</h6>
          
            <Bar data={{
                labels:label,
                
        datasets: [{ 
            barPercentage: 0.5,
            barThickness: 100,
            maxBarThickness: 100,
            minBarLength: 50,
            data: data,
            backgroundColor:["rgba(0,255,255,0.7)",'rgba(240,255,0,0.9)','rgba(149, 235, 52)','rgba(24, 217, 156)','rgba(217, 24, 143)','rgba(217, 146, 24)'],
            beginAtZero:'true'
        }]
        
    }}
  width={500}
  height={500}
  options={ { maintainAspectRatio: false,
                legend :{display:false},

            scales: {
                
                xAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        fontColor:'white',
                        fontSize:18
                }
                ,gridLines: { drawOnChartArea: false,
                              color:'white',
                              tickMarkLength:7}               
            }],
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        fontColor:'white',
                        fontSize:18
                }
                ,gridLines: { drawOnChartArea: false,
                              color:'white',
                              }               
            }]
        }                          
         }}
  
/>
            

            

            
        </div>
    )
}

export default Train
