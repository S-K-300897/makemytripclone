import React from 'react'
// import './Login.css'
import Facebook from '../../Logo/facebook.png'
import Google from '../../Logo/Google.png'

const Login = () => {
    return (
        <form>
            <div className='LoginContainer'>
                <div className='mainLogin'>
                    <h1 style={{ textAlign: "center", marginTop: "15px" }}>Log in</h1>
                    <h3 style={{ textAlign: "center", marginTop: "-15px" }}>Don't have an account?<span style={{ color: "rgb(13,110,253)" }}> Log In</span></h3>
                    <div className='icons'>
                        <button style={{ marginRight: "10px" }}><img src={Google} alt="" style={{ width: "38px", borderRadius: "50%" }} />Sign in with  <span style={{ color: "red", }}><b>Google</b></span></button>
                        <button id='iconFace'><img src={Facebook} alt="" /></button>
                    </div>
                    <div className='OR'>
                        <div className='spaceDiv'></div>
                        <span className='OORR'>or</span>
                        <div className='spaceDiv'></div>
                    </div>
                    <div className='center'>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "200px" }}>Username</label><br />
                            <input type="email" placeholder='Enter Username' required /><br />
                        </div>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "220px" }}>Email</label><br />
                            <input type="email" placeholder='Enter Email' required /><br />
                        </div>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "200px" }}>Password</label><br />
                            <input type="password" placeholder='Enter Password' required /><br />
                        </div>
                        <button style={{marginTop:"-8px"}} >Register</button>
                        
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login