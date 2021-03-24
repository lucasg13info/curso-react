import "./input.css"
import React, {useState }from 'react';

export default (props) => {
    const [valor, setValor] = useState('Inicial');
    
    function quandoMudar(e){
        setValor(e.target.value)
    }
    return (
        <div className="Input">
            <input value={ valor } onChange={quandoMudar}/>
        </div>
    )
}