import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [contador, setContador] = useState(0);

    const aumentar = () => setContador(contador + 1);
    const diminuir = () => setContador(contador - 1);
    const reiniciar = () => setContador(0);

    return (
        <div className={styles.container}>
            <h1>Contador</h1>
            <div className={styles.contador}>{contador}</div>
            <div className={styles.buttons}>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
                <button onClick={reiniciar}>Reiniciar</button>
            </div>
        </div>
    );
}
