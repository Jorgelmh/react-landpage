import React from 'react'
import Properties from './Properties'
import UnderlinedTitle from './titles/UnderlinedTitle'
import './Styles/GlobalClasses.css'
import './Styles/LandingList.css'
import NoStorage from "./Images/files_and_folder.svg"
import Network from './Images/network_.svg'
import Develop from './Images/coding_.svg'

const PropertiesData = [
    {
        id: 1,
        title: "No Storage",
        img: NoStorage
    },
    {
        id: 2,
        title: "Multiplatform",
        img: Network
    },
    {
        id: 4,
        title: "Develop and Share",
        img: Develop
    }
]

const LandingList = () => (
    <section className="site-properties container">
        <UnderlinedTitle text="Want to get distracted?" tag="h2"/>
        <div className="list-of-properties flex-items clearfix">
                { 
                PropertiesData.map(({id ,title, img})=>
                    (
                            <Properties 
                                title={title} 
                                imgSrc={img}
                                key={id}
                            />   
                    )) 
                }
        </div>  
    </section>
)

export default LandingList