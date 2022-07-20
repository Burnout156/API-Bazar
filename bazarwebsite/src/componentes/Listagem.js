import React, {useState} from 'react';
import PropTypes from 'prop-types'

function Listagem({itens}){
    return (
        <>
            <h3 class="text-center mt-5">Produtos</h3>
                <div class="container mb-5">
                    <div class="row">
            {itens.length > 0 ? (
                itens.map((item, index) => (
                <div class="col-sm">
                    <p key={index}>{item}</p>
                    <Botao />
                </div>
            ))) : (
                <p class="text-center">Não tem Produto</p>
            )} 
                    </div>
                </div>           
        </>
    );
}

Listagem.protoTypes = {
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired
}

Listagem.defaultProps = {
    nome: "Sem Nome",
    preco: 0
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

export default Listagem