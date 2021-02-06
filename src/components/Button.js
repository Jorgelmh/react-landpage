import React from 'react'
import './Styles/Button.css'

const Button = ({onSubmit, text}) =>(
    <button className="form-button" onSubmit={onSubmit} >{text}</button>
)

export default Button