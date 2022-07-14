import React from 'react';
import ReactDOM from 'react-dom';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import styles from './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Listar extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        value: "clique aqui",
      }
    }

    render() {
      return (
        <body className={styles.body}>
          <div>
            <Cabecalho/>
            <button className='btn btn-primary' onClick={clicar}>
              {this.state.value}
            </button>
          </div>
        </body>
      );
    }
  }

  function clicar() {
    //return console.log('click');
    return this.props.value = "clicado";
  } 
  
  
  ReactDOM.render(
    <Listar />,
    document.getElementById('root')
  );
  