import React from 'react'
import MainTitle from './MainTitles'
import '../Styles/UnderlinedTitle.css'

const UnderlinedTitle = ({text, tag}) => (
    <div className="dis-flex">
        <div className="title">
            <MainTitle text={text} tag={tag}/>
        </div>
    </div>
)
export default UnderlinedTitle