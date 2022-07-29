import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Cabecalho(){
    return (
        <>            
        <Nav className="d-flex justify-content-evenly align-items-center">

            <Nav.Item>
                <Nav.Link href="/Listar">Listar</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/CriarProduto">Novo Produto</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/DeletarProduto">Deletar Produto</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/AtualizarProduto">Atualizar Produto</Nav.Link>
            </Nav.Item>

        </Nav>
        </>
    )
}