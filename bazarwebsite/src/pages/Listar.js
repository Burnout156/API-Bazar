import React from 'react';
import Listagem from '../componentes/Listagem';

class Listar extends React.Component {

    render() {
        const produtos = ["cadeira", "mesa", "cadeira", "mesa"]

        return(       
            <div>              
                <Listagem itens={produtos} />
                <Listagem itens={[]} />
            </div>
        )
    }
}
 
export default Listar