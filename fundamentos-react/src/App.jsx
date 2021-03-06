import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ =>{
    return (
        <div id>
            <h1>Fundamentos React (Arrow_)</h1>
        <Fragmento/>         
        <ComParametro titulo="Situação do Aluno" 
            aluno= "Pedro" 
            nota= {2.3}
        />

        <ComParametro titulo="Situação do Aluno" 
            aluno= "Maria" 
            nota= {9.9} 
        
        />
        <Primeiro></Primeiro>         
    </div>
    );
}