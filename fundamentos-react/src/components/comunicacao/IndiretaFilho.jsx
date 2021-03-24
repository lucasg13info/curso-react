import React from 'react'

export default props => {
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const cb = props.quandoClicar
    return (
        <div>
            <div>Filho</div>
            <button onClick={e => cb('João', gerarIdade, true)}>
                Fornecer Informações
            </button>
        </div>
    
    )
}