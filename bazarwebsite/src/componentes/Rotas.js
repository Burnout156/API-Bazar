import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Listar from '../pages/Listar';
import CriarProduto from '../pages/CriarProduto';
import AtualizarProduto from '../pages/Atualizar';

export default function Rotas(){
    return (
        <>       
          <Router>     
            <Routes>               
                <Route path="/Listar" element={<Listar />} />
                {/* <Route path="/DeletarProduto" element={<DeletarProduto />} />         */}
                <Route path="/AtualizarProduto/:id" element={<AtualizarProduto />} />   
                <Route path="/CriarProduto" element={<CriarProduto/>} />            
            </Routes>
          </Router>
        </>
    );
}