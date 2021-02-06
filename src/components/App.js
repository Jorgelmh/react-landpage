import React from 'react'
import {BrowserRouter ,Route, Switch} from 'react-router-dom'
import withAuth from './sessions/withAuth'
import LandingPageUnlogged from './LandingPageUnlogged'
import LandingPageLogged from './Example'
import Login from '../Pages/Login'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={withAuth(LandingPageLogged, LandingPageUnlogged)}/>    
            <Route exact path="/login" component={withAuth(LandingPageLogged, Login)}/>      
        </Switch>
    </BrowserRouter>
)

export default App