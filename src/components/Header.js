import React from 'react'
import MainTitles from './titles/MainTitles'
import References from './References'
import './Styles/Header.css'
import Wallpaper from './Images/Wallpaper.png'
import './Styles/GlobalClasses.css'


const Header = ()=>(

    <header className="site-header">
        <div className="references-var">
            <References />
        </div>
        <div className="container">
            <div className="header-text">
                <MainTitles text="Download web games without needing storage space" tag="h1" />
                <div>
                    <p>Install web games on your homescreen</p>
                </div>
            </div>
            <div>
                <div className="videogame-image-header">
                    <img src={Wallpaper} />
                </div>
            </div>
        </div>

    </header>

)

export default Header