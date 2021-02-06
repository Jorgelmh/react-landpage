import React from 'react'
import FormInput from './FormInput'
import './Styles/Login.css'
import Button from './Button'
import './Styles/Login.css'

const LoginForm = ({onChangeName, onChangePassword, name, password }) => (
    <div className="login-form">
        <form>
            <FormInput
                key="2"
                type="text"
                name="name"
                onChange={onChangeName}
                value={name}
            />
            <FormInput
                key="1"
                type="password"
                name="password"
                onChange={onChangePassword}
                value={password}
            />
            <Button text="Sign in" onSubmit="not-yet"/>
            
        </form>
    </div>
)

export default LoginForm