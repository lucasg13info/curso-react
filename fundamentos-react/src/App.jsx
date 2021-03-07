import React from 'react';

import Card from './components/basicos/layout/Card'
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default () =>(
        <div id="root">
            <h1>Fundamentos React (Arrow_)</h1>

        <Card titulo="Desafio Aleatório">
            <Aleatorio min= {1} max={60}/>
        </Card>
        
        

        
    
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