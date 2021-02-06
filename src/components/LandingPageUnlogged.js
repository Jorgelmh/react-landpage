import React from 'react'
import Header from './Header'
import './Styles/GlobalClasses.css'
import LandingList from './LandingList'
import SiteFeatures from './SiteFeatures'
import GamesList from './GamesList'
import Footer from './Footer.js'

const LandingPageUnlogged = () => (
    <React.Fragment>
        <Header />
        <LandingList />
        <SiteFeatures />
        <GamesList title="Main Games" backgroundColor="#f2f2f2" data={(DataSource) => DataSource.getPopularGames()} />
        <Footer />
    </React.Fragment>
)  

export default LandingPageUnlogged