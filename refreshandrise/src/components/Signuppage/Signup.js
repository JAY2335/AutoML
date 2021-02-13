import React from 'react'

const Signup=()=>{
    return(
        <div >
                <div className="login-form ">
                    <div className="">
                        <h2 className="title">SIGNUP</h2>
                        <form >
                        <label className="label">Username</label>
                            <div className="input-box">
                            
                            <input placeholder="Username" name="Username" type="text" ></input>
                            </div>
                            <label className="label"   >Password</label>
                            <div className="input-box">
                            
                            
                            <input placeholder="Password" name="Password" type="password" ></input>
                            </div>
                            <div className="button">
                                <button>Submit</button>
                            </div>
                        </form>
    
                    </div>
                </div>
                </div>
    )
}

export default Signup