import React from 'react';
import styles from './styles.module.css';

export default function Cabecalho(){
    return (
        <div className={styles.nav}>
            <h1>Titulo</h1>
            <a>Página 1</a>
            <a>Página 2</a>
        </div>
    )
}