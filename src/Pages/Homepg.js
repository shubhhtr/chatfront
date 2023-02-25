import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const Homepg=()=>{

    const [ind,setInd]=useState(1);

    const handleChange=(index)=>{
        setInd(index);
    }

    return (
        <>
            <div className="header">
                Freely
            </div>
            <div className="main">
                <ul className="menu">
                    <li onClick={()=>handleChange(1)} className={ind===1 ? "dark" : "no-class"}>Login</li>
                    <li onClick={()=>handleChange(2)} className={ind===2 ? "dark" : "no-class"} >SignUp</li>
                </ul>
                
                <div className={ind===1 ? "show-content" : "content"}>
                    <Login />
                </div>
                <div className={ind===2 ? "show-content" : "content"}>
                    <SignUp />
                </div>

            </div>
        </>
    )
}

export default Homepg;