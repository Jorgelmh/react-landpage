import React, { Component } from 'react'
import LandingPageUnlogged from '../components/LandingPageUnlogged'
import LandingPageLogged from '../components/Example'
import withAuth from '../components/sessions/withAuth'

const HomePage = ({user}) =>{

    if(user)
        return <LandingPageLogged user={user}/>
    else
        return <LandingPageUnlogged />
}


export default withAuth(HomePage)