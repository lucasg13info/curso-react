import './App.css'
import React from 'react';

import Card from './components/basicos/layout/Card'
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default () =>(
        <div className="App">
            <h1>Fundamentos React</h1>

        <div className="Cards"> 
        <Card titulo="#04 -Desafio Aleatório" color="#080">
            <Aleatorio min= {1} max={60}/>
        </Card>    

        <Card titulo="#03 -Fragmento">
            <Fragmento/> 
        </Card>  
    
        <Card titulo="#02 -ComParametro">
            <ComParametro titulo="Situação do Aluno" 
                aluno= "Pedro" 
                nota= {2.3}
            />
        </Card> 

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro> 
        </Card>  

        </div>     
    </div>
);