import React from 'react';
import ReactDOM from 'react-dom';
import Cabecalho from './componentes/Cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './componentes/Rotas';

class Principal extends React.Component {

    render() {
      return (
        <div>
          <Cabecalho/>
          <Rotas/>
        </div>   
      );
    }
  } 
  
  ReactDOM.render(
    <Principal />,
    document.getElementById('root')
  );

  export default Principal