import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Cabecalho from './componentes/Cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listagem from './componentes/Listagem';

class Listar extends React.Component {

    constructor(props){
      super(props);
    }

    render() {
      return (
        <div>
          <Cabecalho/>
          <Listagem preco={4} />
          <Botao />
          <Listagem nome="Cadeira" preco={2}/>
          <Listagem/>
        </div>   
      );
    }
  }

  function Botao() {
    const [botao, setBotao] = useState("Clique Aqui")

    function clicar() {
      console.log('clicado');
      return setBotao("Clicado");    
    } 
  
    return (
      <>
        <button className='btn btn-primary' onClick={clicar}>
          {botao}
        </button>
      </>
    );
  }
  
  
  ReactDOM.render(
    <Listar />,
    document.getElementById('root')
  );
  