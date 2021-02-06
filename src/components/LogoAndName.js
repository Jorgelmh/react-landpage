import React from 'react'
import Logo  from './Images/TemporalLogo.png'
import './Styles/Header.css'

const LogoAndName = () => (
    <div className="logo-and-name">
        <img src={Logo} />
        <h2>PWAhub</h2>
    </div>
)

export default LogoAndName