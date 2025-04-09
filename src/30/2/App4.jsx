import React from 'react';
import { useContext } from 'react';
import { divs } from './App3.jsx';
export default function App() {
    
    const color = useContext(divs)

    return (
    <>
        <div style={{width:"200px", height:"200px", backgroundColor: color ? "red" : "green"}}>dfdfdf</div>
        <button onClick={}>Color</button>
    </>
    )
}