import React from 'react'
import '../Styles/MainTitles.css'

const MainTitle = ({text, tag}) => {
    if(tag == 'h1')
        return <h1>{text}</h1>
    else
        return <h2>{text}</h2>
}

export default MainTitle
