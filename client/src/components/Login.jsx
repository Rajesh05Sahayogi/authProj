import React from 'react'
import "../assets/login.css"
const Login = () => {
    const loginwithgoogle = ()=>{
        window.open("http://localhost:5000/auth/google/callback","_self")
    }
  return (
    <div>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Login BY AUTH</h1>
            <div className="form">
                <form className='login-form'>
                    <input type="text" name="" id="username" placeholder='username' />
                    <input type="password" name="" id="userpassword" placeholder='password'  />
                    <button>Login</button>
                    <p className='message'>Not Registerd? <a href="#">Create an account</a></p>
                </form>
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    Sign In With Google
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login