import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Cabecalho(){
    return (
        <>            
        <Nav className="d-flex justify-content-evenly align-items-center">

            <Nav.Item>
                <Nav.Link href=".">Principal</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/Listar">Listar</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/Contato">Contato</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/Perfil">Perfil</Nav.Link>
            </Nav.Item>

        </Nav>
        </>
    )
}