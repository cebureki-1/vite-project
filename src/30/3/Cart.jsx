import { useState, useContext } from 'react';
import { totalcard } from 'react';
export function Cart() {
    const [cart] = useContext(totalcard);
    
    return (
        <div>
            <h1>Cart ALL</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                </div>
            ))}
            <h2>Total: {cart.reduce((count, item) => count + item.price, 0)}</h2>
        </div>
    );
}