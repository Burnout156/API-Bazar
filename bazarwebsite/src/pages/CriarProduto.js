import React, { useState } from 'react';
import ConectarAPI from '../componentes/ConectarAPI';
import {Container, Row, Col, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import axios from "axios";

const CriarProduto = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(''); 

  //const history = useHistory();

  const SalvarProduto = async (e) => {   
      const produto = [{nome, descricao, preco}];  
      console.log("Nome: " + nome);
      console.log("Descricao: " + descricao);
      console.log("Preco: " + preco);
      e.preventDefault();
      await axios.post('http://localhost:8080/cadastrar',{
            nome: nome,
            descricao: descricao,
            preco: preco
        });
  }

  return (
    <Container className="pt-3">
        <Row>
            <Col></Col>
            
            <Col>
                <Form onSubmit={ SalvarProduto }>
                    
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" onChange={ (e) => setNome(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descricao">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text" placeholder="Descrição" onChange={ (e) => setDescricao(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="preco">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control type="text" placeholder="Preço" onChange={ (e) => setPreco(e.target.value)}/>
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

export default CriarProduto;
