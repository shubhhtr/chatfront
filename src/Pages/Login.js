import React, {useState} from 'react'

function Login() {

  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");

  const getData= ()=>{
    console.log(email,pass);
  }

  return (
    <div className="signup-box">
      <label className='label'>Email *</label>
      <input type="text" className='input-box' onChange={(e)=>setEmail(e.target.value)} />
      <label className='label'>Password *</label>
      <input type="password" className='input-box' onChange={(e)=>setPass(e.target.value)} />
      <button className="button" onClick={getData} >Login</button>
    </div>
  )
}

export default Login