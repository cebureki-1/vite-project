import { useReducer, useEffect } from 'react';
import React from 'react';
import "./App.css"

const initialState = {
    loading: true,
    data: null,
    error: "",
    show: true
};
function fetchReducer(state, action) {
    switch (action.type) {
        case "start":
            return {
                ...state,
                loading: true,
                error: ''
            }

        case "success":

            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case "error":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "show":
            return{
                ...state,
                loading: false, 
                show: true
            }


    }
}
export default function Reducer() {
    const [state, dispatch] = useReducer(fetchReducer, initialState)

    useEffect(() => {
        async function fetchdata() {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                dispatch({ type: "success", payload: data })
                console.log(data);

            } catch (error) {
                dispatch({ type: "error", payload: "somthing getting wrong" })
            }

        }
        fetchdata()
    }, [])

    return (
        <>
        
    <div className="container">
        <h1 className="title">Fetch Products</h1>
        {state.loading && <h2 className="loading">Loading...</h2>}
        {state.error && <h2 className="error">{state.error}</h2>}
        <button>{state.show ? "show" : "hide"}</button>
     
        <ul className="product-list">
            {state.data && state.data.map((data) => (
                <li className="product-card" key={data.id}>
                    <h2 className="category">{data.category}</h2>
                    <img className="product-image" src={data.image} alt={data.title} />
                    <p className="price">Price: ${data.price}</p>
                    <p className="description">{data.description}</p>
                </li>
            ))}
        </ul>
    </div>
        </>
    )
}

