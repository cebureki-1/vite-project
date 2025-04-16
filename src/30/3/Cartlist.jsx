import { useState, createContext} from "react";

function Cartlist({children}) {
    const [cart, setCart] = useState([]);

    const Tunder = createContext(Tunder);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    }
    
    return (
    <Tunder.Provider value={{cart, addToCart}}>
        {children}
    </Tunder.Provider>
    );

}