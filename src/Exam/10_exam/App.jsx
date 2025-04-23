import { useEffect, useReducer, useState } from "react";

const init = {
  price: 0,
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        price: state.price + action.payload.price ,
        todos: [
          ...state.todos,
          {
            id: state.todos.length || 0,
            title: action.payload.names,
            price: action.payload.price
          }
        ]
      };

    case "CLEAR_CART":
      return {
        todos: []
        
      };

    case "REMOVE_ITEM":
      
      return {
        ...state,
        price: state.price - action.payload.price,
        todos: state.todos.filter((todo) => todo.id  !== action.payload.index),
      };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, init);
    console.log(state);
    
  return (
    <div>
      <h2>To-Do Magazine</h2>
        <div >
            <div>
              <h3>Book - 2000</h3>
              <button onClick={()=>dispatch({type: "ADD_ITEM", payload:{ names: "Book", price: 2000}})}>ADD</button>
            </div>
            <div>
              <h3>Laptop - 150000</h3>
              <button onClick={()=>dispatch({type: "ADD_ITEM", payload:{ names: "Laptop", price: 150000}})}>ADD</button>
            </div>
            <div>
              <h3>headphones - 2000</h3>
              <button onClick={()=>dispatch({type: "ADD_ITEM", payload:{ names: "headphones", price: 12000}})}>ADD</button>
            </div>
        </div>
      <ul>
        {state.todos.map((todo) => (
          <li
            style={{display: "flex"}}
            key={todo.id}
          >
              <>
                <h4 style={{padding: "20px"}}>{todo.title}</h4>
                <p style={{padding: "20px"}}>{todo.price}</p>
                <button style={{padding: "20px"}} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: {index: todo.id, price: todo.price }})}>
                  Өшіру
                </button>
              </>
          </li>
        ))}
      </ul>
      <h1>Price : {state.price}</h1>
      <button onClick={()=> dispatch({ type: "CLEAR_CART"})}>clear card</button>
    </div>
  );
}
