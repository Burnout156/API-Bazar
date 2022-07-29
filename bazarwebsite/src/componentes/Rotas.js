import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Principal from '..';
import Listar from '../pages/Listar';
import Atualizar from '../pages/Atualizar';
import DeletarProduto from '../pages/DeletarProduto';
import CriarProduto from '../pages/CriarProduto';

export default function Rotas(){
    return (
        <>       
          <Router>     
            <Routes>
                <Route path="." element={<Principal/>} /> {/*aqui eu gostaria de voltar para o index.js, só que não faço ideia de como fazer sem dar loop infinito*/}
                <Route path="/Listar" element={<Listar />} />
                {/* <Route path="/DeletarProduto" element={<DeletarProduto />} />         */}
                <Route path="/AtualizarProduto" element={<Atualizar />} />   
                <Route path="/CriarProduto" element={<CriarProduto/>} />            
            </Routes>
          </Router>
        </>
    );
}