import React from 'react'
import './Styles/Properties.css'

const Properties = ({title, imgSrc}) => (
    <div className="single-property flex-item">
        <div>
            <img src={imgSrc}/>
        </div>
        <h3>{title}</h3>
    </div>
)

export default Properties