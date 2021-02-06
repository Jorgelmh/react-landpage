import React from 'react'
import './Styles/Footer.css'
import WaveDecoration from './Resources/WaveDecoration'
import './Styles/GlobalClasses.css'
import LogoAndName from './LogoAndName'
import Hyperlink from './Hyperlink'

const Footer = ()=>(
    <footer>
        <WaveDecoration color="rgba(254,108,248,1)" />
        <div className="site-footer">
            <div className="container">
                <div className="logo-name">
                    <LogoAndName />
                </div>
                <div className="links-info">
                    <div className="footer-links">
                        <nav>
                            <Hyperlink title="about" url="#" />
                            <Hyperlink title="Contact" url="#" />
                            <Hyperlink title="terms" url="#" />
                        </nav>
                    </div>
                    <div className="footer-info">
                        <p>Hosted on AWS <i className="fab fa-aws"></i></p>
                        <Hyperlink preText="a design by " title="Jorge Mendez" url="mailTo:jorgelmh_01@hotmail.com" />
                    </div>
                </div>
                <p id="copyright-zone"> PWAhub 2020 &copy; </p>
            </div>
        </div>
    </footer>
)

export default Footer