import React, { Component } from "react"
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from "../assets/logo.png";
import '../components/styling.css'
import Signup from './Signuppage/Signup'

class Home extends Component{
    
    state={
        users:[{Username:"",Password:""}]

    }
    
    handleChange=(e)=>{
       
        console.log("the form is submitted");
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state)
    }

    addUser=(e)=>{
        console.log("efhfe")

    }

    
    


    submit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        
    }
    render(){
        return(
            
            <div >
                <div className="left">
                    
                    <img className="flogo" src={require("../assets/logo.png")}></img>
                    <div className="quote"><p>MACHINE LEARNING<br></br><span> ON YOUR TIPS.</span></p></div>
                    
                </div>
                <div className="right">
                <div className="login-form ">
                    <div className="">
                        <h2 className="title">LOGIN</h2>
                        <form onSubmit={this.submit}>
                        <label className="label">Username</label>
                            <div className="input-box">
                            
                            <input placeholder="Username" name="Username" type="text" onChange={this.handleChange}></input>
                            </div>
                            <label className="label"   >Password</label>
                            <div className="input-box">
                            
                            
                            <input placeholder="Password" name="Password" type="password" onChange={this.handleChange}></input>
                            </div>
                            <div className="button">
                                <button>Submit</button>
                            </div>
                        </form>
                        
    
                    </div>
                </div>
                
                </div>
                <div className="guest">
                        <a href="/fileupload">Try as Guest</a>
                </div>
    
            </div>
        )

    }
    
}

export default Home;
