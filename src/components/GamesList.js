import React, { Component, Fragment} from 'react'
import * as api from './Source/getGamesList.js'
import GameLayout from './GameLayout'
import Loader from './Loader'
import Glide from '@glidejs/glide'
import './Styles/GamesList.css'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import './Styles/GlobalClasses.css'
import './Styles/UnderlinedTitle.css'
import MainTitle from './titles/MainTitles.js'


class GamesList extends Component{
    state = {
        loading: true,
        error: false,
        games: [],
        Glide: null,
    }

    componentDidMount(){
        setTimeout(()=>{
            
            this.setState({
                games: this.props.data(api),
                loading: false,
            })
            
            this.setState({
                Glide: this.MountGlide()
            }) 
            
            
        }, 200)
    }

    MountGlide = () => {

        let glide = new Glide('.glide', {
            startAt: 0,
            perView: 5,
            breakpoints: {
                800: {
                    perView: 3
                },
                550: {
                    perView: 1
                }
            }

        }).mount()
    
        return glide
    }


    //TODO: add method to change the amount of items when 350px, 800, and greater -> use state variable GlideViews

    render(){

        if(this.state.loading)
            return <Loader />
        else{
            return (
                <div className="site-games-list">
                    <MainTitle text={this.props.title} tag="h2"/>
                    <div className="list-background" style={{backgroundColor: this.props.backgroundColor}}>
                        <div className="glide container">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {
                                        this.state.games.map(game =>(
                                            <li key={game.id}>
                                                <div className="glide__slide">
                                                    <GameLayout
                                                        title={game.title}
                                                        img={game.img}
                                                        developer={game.developer}
                                                        comments={game.comments}
                                                        likes={game.likes}
                                                    />
                                                </div>   
                                            </li>    
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="glide__arrows arrows" data-glide-el="controls">
                                <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><i className="fas fa-arrow-left"></i></button>
                                <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><i className="fas fa-arrow-right"></i></button>
                            </div>
                            <div className="glide__bullets" data-glide-el="controls[nav]">
                                {
                                    this.state.games.map((element, index) => (
                                        <button key={index} className="glide__bullet" data-glide-dir={`=${index}`}></button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
        
            )
        }      
    }
}

export default GamesList