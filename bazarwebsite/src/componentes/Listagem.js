import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import ConectarAPI from './ConectarAPI';
import React from 'react'
 
const Listagem = () => {
    const [produtos, setProdutos] = useState([]);
 
    useEffect(() => {
        getProdutos();
    }, []);
 
    const getProdutos = async () => {
      ConectarAPI.listar()
        .then(response => {
          return setProdutos(response.data.produtos);
        })
    }
 
    const deletarProduto = async (id) => {
        ConectarAPI.deletar(id)
        getProdutos();
    }
 
    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { produtos.map((produto, index) => (
                        <tr key={ produto.id }>
                            <td>{ index + 1 }</td>
                            <td>{ produto.nome }</td>
                            <td>{ produto.descricao }</td>
                            <td>{ produto.preco }</td>
                            <td>
                                <Link to={`/edit/${produto.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deletarProduto(produto.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default Listagem