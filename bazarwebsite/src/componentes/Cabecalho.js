import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Listar from '..';
import Contato from '../pages/Contato';
import Perfil from '../pages/Perfil';

export default function Cabecalho(){
    return (
        <Router>
            <Routes>
                <Route path="/principal" element={<Listar />} /> {/*aqui eu gostaria de voltar para o index.js, só que não faço ideia de como fazer sem dar loop infinito*/}
                <Route path="/contato" element={<Contato />} />
                <Route path="/perfil" element={<Perfil />} />
            </Routes>
        </Router>
    )
}