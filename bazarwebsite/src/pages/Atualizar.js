import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ConectarAPI from '../componentes/ConectarAPI';
import {Container, Row, Col, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
 
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
        <Container className="pt-3">
            <Row>
                <Col></Col>
                
                <Col>
                    <Form onSubmit={ atualizar }>
                        
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" onChange={ (e) => setNome(e.target.value)} value={nome}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="descricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Descrição" onChange={ (e) => setDescricao(e.target.value)} value={descricao}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control type="text" placeholder="Preço" onChange={ (e) => setPreco(e.target.value)} value={preco}/>
                        </Form.Group>

                        <div className='d-flex justify-content-center'>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </div>
                        
                    </Form>
                </Col>

                <Col></Col>
            </Row>      
        </Container>
     
    )
}
 
export default AtualizarProduto