import React, { useState } from 'react'
import "../Login.css"
/**
* @author
* @function Login
**/

const Login = (props) => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
  return(
    <div className="login" >
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <form className="login__form" >
            <img className="w3-animate-top"  src="https://im2.ezgif.com/tmp/ezgif-2-3442ebaab3cd.png" />
        
        <div className="w3-animate-zoom">Type in Username and Password</div>
        <input className="login__user w3-animate-right" type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" />
        <input className="w3-animate-left" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
        <button className="w3-animate-bottom">Log in</button>

        </form>
        

    </div>
   )

 }

export default Login