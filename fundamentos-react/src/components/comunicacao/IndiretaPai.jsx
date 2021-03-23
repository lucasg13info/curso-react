import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {


    //Nome idade nerd
    function forcencerInformacoes(nome, idade, nerd){
        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={ forcencerInformacoes }/>
        </div>
    
    )
}