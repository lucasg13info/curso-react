import './index.css'
import ReactDOM from'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(  
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" 
            aluno= "Pedro" 
            nota= {2.3} />

        <ComParametro titulo="Situação do Aluno" 
            aluno= "Maria" 
            nota= {9.9} />

            <Fragmento/>
        
    </div>, 
    document.getElementById('root')

    )
