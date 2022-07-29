import { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import ConectarAPI from './ConectarAPI';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 
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
                    <tr className='table-primary'>
                        <th className='table-primary'>ID</th>
                        <th className='table-primary'>Nome</th>
                        <th className='table-primary'>Descrição</th>
                        <th className='table-primary'>Preço</th>
                        <th className='table-primary'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { produtos.map((produto, index) => (
                        <tr key={ produto.id }>
                            <td className='table-primary'>{ index + 1 }</td>
                            <td className='table-primary'>{ produto.nome }</td>
                            <td className='table-primary'>{ produto.descricao }</td>
                            <td className='table-primary'>{ produto.preco }</td>
                            <td className='table-primary d-flex justify-content-around'>
                                <Link to={`/AtualizarProduto/${produto.id}`} className="btn btn-primary mr-2">Editar</Link> 
                                <button onClick={ () => deletarProduto(produto.id) } className="btn btn-primary">Deletar</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )

}
 
export default Listagem