import React, { useState, Fragment} from 'react'
import LoginForm from '../components/LoginForm'
import {Helmet} from 'react-helmet'
import Logo from '../components/Images/TemporalLogo.png'

const Login = () =>{
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const HandleLogin = () =>{
        
    }

    return (
        <Fragment>
            <Helmet bodyAttributes={{style: 'background-image: url(images/19742.jpg);'}} />
            <div className="site-login">
                <div className="login-letter">
                    <img src={Logo} />
                    <h1>Sign In</h1>
                </div>
                <LoginForm 
                    onChangeName={setName} 
                    onChangePassword={setPassword}
                    name={name}
                    password={password}
                />
            </div>
        </Fragment>
        
    )
}

export default Login