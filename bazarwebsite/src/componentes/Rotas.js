import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Contato from '../pages/Contato';
import Perfil from '../pages/Perfil';
import Principal from '..';
import Listar from '../pages/Listar';

export default function Rotas(){
    return (
        <>       
          <Router>     
            <Routes>
                <Route path="." element={<Principal/>} /> {/*aqui eu gostaria de voltar para o index.js, só que não faço ideia de como fazer sem dar loop infinito*/}
                <Route path="/Listar" element={<Listar />} />
                <Route path="/Contato" element={<Contato />} />        
                <Route path="/Perfil" element={<Perfil />} />
            </Routes>
          </Router>
        </>
    );
}