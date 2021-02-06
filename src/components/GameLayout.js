import React from 'react'
import './Styles/GameLayout.css'

const GameLayout = ({title, img, developer, comments, likes}) => (
    <div className="single-game">
        <div className="game-mini">
            <a href="#"><img src={img} /></a>
        </div>
        <div className="game-info">
            <a href="#"><h3>{title}</h3></a> 
            <p className="gameLayout-username"><i className="fas fa-user user-color"></i>: {developer} </p>
            <div className="mini-likes-comments">
                <p>{comments} <i className="fas fa-comment comment-color"></i> </p>
                <p>{likes} <i className=" fas fa-heart heart-color"></i></p>
            </div>
        </div>
    </div>
)

export default GameLayout
