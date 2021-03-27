import React from "react"

export default props =>{
    return(
        <div>   
            <button onClick={props.SetInc}> + </button>
            <button onClick={props.SetDec}> - </button>
        </div>
    )

}