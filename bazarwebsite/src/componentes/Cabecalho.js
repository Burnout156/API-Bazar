import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Cabecalho(){
    return (
        <Nav className="d-flex justify-content-evenly align-items-center">

            <Nav.Item>
                <Nav.Link href="/home">Titulo</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/home">Página 1</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/home">Página 2</Nav.Link>
            </Nav.Item>
            
        </Nav>
    )
}