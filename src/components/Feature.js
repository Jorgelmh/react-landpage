import React from 'react'
import './Styles/features.css'

const Feature = ({title, Description, img, reverse}) =>(
    <div className="single-feature" style={reverse ? {flexDirection: "row-reverse"} : null}>
        <div className="feature-img">
            <img src={img} />
        </div>
        <div className="feature-text">
            <h3>{title}</h3>
            <p>{Description}</p>
        </div>
    </div>
)

export default Feature
