import { useReducer, useState } from "react";

const init = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload,
            completed: true,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, init);
  const [names, setNames] = useState("");

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleADD = () => {
    if (names.trim()) {
      dispatch({ type: "ADD_TODO", payload: names });
      setNames("");
    }
  };

  const handleEdit = (id, currentTitle) => {
    setEditId(id);
    setEditText(currentTitle);
  };

  const handleEditSubmit = () => {
    dispatch({ type: "EDIT_TODO", payload: { id: editId, title: editText } });
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <h2>To-Do App</h2>

      <div>
        <input
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <button onClick={handleADD}>Қосу</button>
      </div>

      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
          >
            {editId === todo.id ? 
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleEditSubmit}>Сақтау</button>
              </>
             : 
              <>
                <span>{todo.completed ? 
                todo.title : 
                <del>{todo.title}</del>
                }</span>
                <button onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
                  {todo.completed ? "Қайта ашу" : "Аяқталды"}
                </button>
                <button onClick={() => handleEdit(todo.id, todo.title)}>Өзгерту</button>
                <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
                  Өшіру
                </button>
              </>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
