import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return(

     <button 
        onCllick={e => props.click && props.click(props.label)}
     classname={classes}>
        { props.label }
    </button>
    )
}
           
