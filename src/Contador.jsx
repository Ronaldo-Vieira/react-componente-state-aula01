import { Fragment, React,  useState } from 'react';
import './Contador.css'

export default _ => {
    const [ resultado, setResulta ] = useState(0)
    return (
        <Fragment>
            <h1>Contador =&gt;  { resultado }</h1>
            <button 
                onClick = { _ => setResulta( resultado + 1 ) }>
                Adiconar +1
            </button>

            <button 
                onClick = { _ => setResulta( resultado - 1 ) }>
                Remover -1
            </button>
        </Fragment>
    )
};