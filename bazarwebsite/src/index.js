import React from 'react';
import ReactDOM from 'react-dom';
import Cabecalho from './componentes/Cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listagem from './componentes/Listagem';

class Listar extends React.Component {

    render() {
      const produtos = ["cadeira", "mesa", "cadeira", "mesa"]

      return (
        <div>
          <Cabecalho/>
          <Listagem itens={produtos} />
          <Listagem itens={[]} />
        </div>   
      );
    }
  } 
  
  ReactDOM.render(
    <Listar />,
    document.getElementById('root')
  );
  