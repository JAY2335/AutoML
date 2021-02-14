import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Signuppage/Signup'
import Uploadtwo from './components/Upload/uploadtwo'
import Train from './components/Train/train'


function App(){

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  

  
  
  
    return(
      <BrowserRouter>
      
      <div className="App">
        
       <Navbar />
       <Route exact path="/" component={Home} />
       <Route exact path="/signup" component={Signup} />
       
       
       <Route exact path="/fileupload" render={(props)=><Uploadtwo columns={columns} setColumns={setColumns} data={data} setData={setData}/>} />
       <Route exact path="/train" component={Train} />




       



       
      </div>
      </BrowserRouter>
    )
  }


export default App;
