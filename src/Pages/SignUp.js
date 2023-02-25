import React, { useState } from 'react'

function SignUp() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [cnfpass,setCnfpass]=useState("");

  const getData= ()=>{
    console.log(name,email,pass,cnfpass);
  }

  return (
    <div className="signup-box">
      <label className='label'>Name *</label>
      <input type="text" className='input-box' onChange={(e)=>setName(e.target.value)} />
      <label className='label'>Email *</label>
      <input type="text" className='input-box' onChange={(e)=>setEmail(e.target.value)} />
      <label className='label'>Password *</label>
      <input type="password" className='input-box' onChange={(e)=>setPass(e.target.value)} />
      <label className='label'>Confirm Password *</label>
      <input type="password" className='input-box' onChange={(e)=>setCnfpass(e.target.value)} />
      <label className='label'>Upload your Picture</label>
      <input type="file" />
      <button className="button" onClick={getData} >SignUp</button>
    </div>
  )
}

export default SignUp