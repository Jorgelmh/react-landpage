import React, { Component } from 'react'
import MainTitles from './titles/MainTitles'
import Feature from './Feature'
import WaveDecoration from './Resources/WaveDecoration'
import './Styles/Site-features.css'
import AddToHomescreen from './Images/undraw_app_installation.svg'
import ProgressivewebApp from './Images/undraw_progressive_app.svg'
import Upload from './Images/undraw_uploading.svg'


class SiteFeatures extends Component{
    state = {
        features: [
            {
                id: 1,
                title: 'Add games to your homescreen',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta porta felis, et fermentum ante posuere sit amet. Nam pellentesque aliquam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
                img: AddToHomescreen
            },
            {
                id: 2,
                title: 'PWA Technologies',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta porta felis, et fermentum ante posuere sit amet. Nam pellentesque aliquam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
                img: ProgressivewebApp
            },
            {
                id: 3,
                title: 'Upload a game easily',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta porta felis, et fermentum ante posuere sit amet. Nam pellentesque aliquam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
                img: Upload
            }
        ]
    }

    render(){
        return (
            <main className="main-features">
                <WaveDecoration color="rgb(224, 253, 251)" />
                <div className="container">
                    <div className="site-features">
                        <MainTitles text="Main Features!" tag="h2"/>
                        <div className="features-list">
                            {
                                this.state.features.map( feature => (
                                    <Feature 
                                        key={feature.id}
                                        title={feature.title} 
                                        Description={feature.Description}
                                        img={feature.img}
                                        reverse={(feature.id % 2 == 0) ? true : false}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default SiteFeatures