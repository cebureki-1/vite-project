
import { useState, useContext, createContext} from "react";
const cards = [
    { id: 1, name: "Card 1", price: 100 },
    { id: 2, name: "Card 2", price: 200 },
    { id: 3, name: "Card 3", price: 300 },
    { id: 4, name: "Card 4", price: 400 },
    { id: 5, name: "Card 5", price: 500 },
]

export  function Cartdetails() {
    const [cart, setCart] = useState(cards);
    return (
        <totalcard.Provider value={[cart, setCart]}>
            <div>
                <h1>Cart ALL</h1>
                {cards.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <button> корзинага алу</button>
                    </div>
                ))}
                <h2>Total: {cart.reduce((count, item) => count + item.price, 0)}</h2>
            </div>
        </totalcard.Provider>
    );
}