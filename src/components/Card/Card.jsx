import React from 'react'
import './Card.scss'
import {AiFillGithub} from 'react-icons/ai'
import {GiSaveArrow} from 'react-icons/gi'

function getKeywords(keywords){
    let lista = keywords.split(",")
    return lista
}

function toLink(link){
    window.open(link, "_blank")
}

function Card(props){

    const keywords = getKeywords(props.keywords)

    return (
        <div className={`card-container border-${props.theme}`} onClick={() => toLink(props.link)}>
            <div className="card-header">

                <span className={`card-author background-${props.theme}`}>{props.author}</span>
                
                <div className="card-buttons">
                    <AiFillGithub className={`card-button background-${props.theme}`}/>
                    <GiSaveArrow className={`card-button background-${props.theme}`} />
                </div>
            
            </div>

            <span className="card-title">
                {props.title}
            </span>

            <div className="card-footer">
                {keywords.map((keyword, index) => {
                    return(
                        <span className="card-keyword" key={index}>• {keyword}</span>
                    )
                })}
            </div>

        </div>
    )
}

export default Card