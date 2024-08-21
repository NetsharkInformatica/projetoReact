
import './App.css';
//import SayMyName from './components/SayMyName';
//import Frase from './components/Frase';
//import Lista from './components/Lista'
//import Eventos from './components/Eventos';
//import Form from './components/Form'
//import Condicao from './components/Condicao';
//import Rendlista from './components/RendLista'
import SeuNome from './components/SeuNome';
import {useState} from 'react'
import Saudacao from './components/Saudacao';


function App() {
  //const meusApps=['Reack','Vue','javascript']
  const [nome,setNome]=useState()
  return (
    
    <div className="App">
      <h1>State lifts</h1>
      {/*<h1>testando eventos</h1>
       <Eventos numero="1"/>
      <Eventos numero="2"/> 
      <Eventos/>
      <Condicao/>

      <Rendlista itens={meusApps}/>*/}

      <SeuNome  setNome={setNome}/>
      <Saudacao nome={nome}/>
      
      
       
      
    </div>
  );
}

export default App;
