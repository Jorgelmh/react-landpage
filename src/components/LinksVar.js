import React from 'react'
import './Styles/LinksVar.css'
import Hyperlink from './Hyperlink'

class LinksVar extends React.Component{

    state = {
        isResponsiveListDisplayed: false,
        links: [
            {
                id: 1,
                name: 'About',
                url: 'about'
            },
            {
                id: 2,
                name: 'Games',
                url: 'games'
            },
            {
                id: 3,
                name: 'Sign In',
                url: 'login'
            },
            {
                id: 4,
                name: 'Sign Up',
                url: 'register'
            }   
        ]
    }

    handleClick = (event)=>{

        if(!this.state.isResponsiveListDisplayed){
            let navbar = document.getElementById('references')
            navbar.setAttribute('style', 'display: block;')
            this.setState({
                isResponsiveListDisplayed: true
            })
        }
        else{
            let navbar = document.getElementById('references')
            navbar.setAttribute('style', 'display: none')
            this.setState({
                isResponsiveListDisplayed: false
            })
        }       
    }

    render(){
        return(
            <React.Fragment>
                <button className="burger-button" onClick={this.handleClick}>
                    <i className="fas fa-bars"></i>
                </button>
                <nav id="references" className="nav-references">
                    {
                        this.state.links.map( hyperlink => (
                            <Hyperlink 
                                title={hyperlink.name} 
                                url={hyperlink.url}
                                key={hyperlink.id}
                            />
                        ))
                    }
                </nav>
            </React.Fragment>
        )
    }
}

export default LinksVar