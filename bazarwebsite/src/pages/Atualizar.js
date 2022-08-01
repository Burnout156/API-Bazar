import React from 'react';

import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import ConectarAPI from '../componentes/ConectarAPI';
 
const AtualizarProduto = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const { id } = useParams();
 
    const atualizar = async (e) => {
        console.log("tá atualizando")
        e.preventDefault();
        ConectarAPI.atualizar(id, [nome, preco, descricao])
    
        // e.preventDefault();
        // axios.put(`http://localhost:8080/atualizar`,{
        //     id: id,
        //     nome: nome,
        //     preco: preco,
        //     descricao: descricao
        //   });
        // history.push("/");
    }
 
    useEffect(() => {
        getProductById();
    }, []);
 
    const getProductById = async () => {
        ConectarAPI.listarPorId(id)
            .then(response => {           
                setNome(response.data.produto[0].nome);
                setPreco(response.data.produto[0].preco);
                setDescricao(response.data.produto[0].descricao)
            })
        //const response = await axios.get(`http://localhost:5000/products/${id}`);       
    }
 
    return (
        <div>
            <form onSubmit={ atualizar }>
                <div className="field">
                    <label className="label">Nome</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Nome"
                        value={ nome }
                        onChange={ (e) => setNome(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Preco</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Preço"
                        value={ preco }
                        onChange={ (e) => setPreco(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Descricao</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Preço"
                        value={ descricao }
                        onChange={ (e) => setDescricao(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="btn btn-primary">Atualizar</button>
                </div>
            </form>
        </div>
    )
}
 
export default AtualizarProduto