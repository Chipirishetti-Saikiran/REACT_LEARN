//Using State we will handle form data , React controls the input value using state.

//use State

//Every change is tracked via onChange.

import { useState } from "react";


function Controlled(){


    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    return(
        <>
            <div className="border w-25 mt-5 m-auto p-4">
                <h1 className="text-primary text-center">Login Form</h1>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} className="form-control" placeholder="Enter yor mail id" onChange={(e) => setEmail(e.target.value)}/>
                    <p>Your Mail Id:{email}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} className="form-control" placeholder="Enter yor mail id" onChange={(e) => setPassword(e.target.value)}/>
                    <p>Your Mail Id:{password}</p>
                </div>
                <div>
                    <button type="button" className="btn-primary" value="submit">Submit</button>
                </div>
            </div>
        
        
        </>
    )
}

export default Controlled;