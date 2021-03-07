import "./Card.css" 
import React from 'react'

export default props =>{

    return (
        <div className="Card">
            <div>Conteúdo</div>
            <div>{ props.titulo }</div>
            
        </div>
    )
};