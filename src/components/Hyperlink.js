import React from 'react'
import './Styles/Hyperlink.css'
import  {Link} from 'react-router-dom'

const Hyperlink = ({preText, title, url}) =>(
     <p className="url-link"> {(!!preText) ? preText : null } <Link to={`/${url}`}>{title}</Link></p>
)

export default Hyperlink