import React from 'react';
import PropTypes from 'prop-types'

function Listagem({nome, preco}){
    return (
        <>
            <p>{nome}</p>
            <p>{preco}</p>
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

export default Listagem