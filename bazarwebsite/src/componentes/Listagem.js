import React, {Component } from 'react';
import ConectarAPI from './ConectarAPI';

export default class Listagem extends Component {
  constructor(props) {
    super(props);
    this.listarProdutos = this.listaDeProdutos.bind(this);

    console.log("Valor de listarProdutos: " + this.listarProdutos)

    this.state = {
      produtos: [],
    };
  }

  componentDidMount() {
    this.listaDeProdutos();
  }
    
  render() {
    const {produtos } = this.state

    return(
      <div className="col-md-6">
        <h4>Lista de Produtos</h4>
        {console.log("Valor de Produtos: " + produtos)}
        <ul className="list-group">
          {produtos &&
            produtos.map((produto, index) => (
              <>
              <li className="list-group-item " key={index}>
                {"Nome: " + produto.nome}  
              </li>
              <li className="list-group-item " key={index}>
                {"Preço: " + produto.preco}
              </li>
              <br/>
              </>
            ))}
        </ul>    
      </div>
  )}; 

  listaDeProdutos() {
    console.log("ta pegando do back")
    ConectarAPI.listar()
      .then(response => {
        console.log(response.data.register);
        return this.setState({
          produtos: response.data.register
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

}
