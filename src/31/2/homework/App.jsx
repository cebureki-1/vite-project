import React, { useReducer } from 'react';
import "./App.css"
const initialState = {
    inputname: '',
    Name: localStorage.getItem("username") || "",
    loading: false,
};

function reducer(state, action) {
    switch (action.type) {

        case 'setName':
            return {
                ...state,
                inputname: action.payload
            };

        case 'startSaving':
            return {
                ...state,
                loading: true
            };

        case 'saveSuccess':
            return {
                ...state,
                loading: false,
                Name: action.payload
            };

        default:
            return state;
    }

}


export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState);


    const handleclick = () => {
        dispatch({ type: 'startSaving' });

        setTimeout(() => {
            localStorage.setItem('username', state.inputname);
            dispatch({ type: 'saveSuccess', payload: state.inputname });
        }, 1000);
    };


    return (
        <div className="card">
            <h1 className="title">Есімді Сақтау</h1>
            <input
                className="input"
                type="text"
                placeholder="Есіміңізді жазыңыз"
                value={state.inputname}
                onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
            />
            <button className="button" onClick={handleclick}>
                {state.loading ? 
                    <div>
                        <img
                            src="https://www.lowrance.com/assets/img/transparent-background-loading-gif.gif"
                            alt="loading"
                            style={{ width: '20px', height: '20px', marginRight: '8px' }}
                        />
                        Сақталуда...
                    </div>
                 : 
                    'Сақтау'
                }

            </button>
            {state.Name && 
                <p className="saved-name">
                    Соңғы сақталған есім: <strong>{state.Name}</strong>
                </p>
            }
        </div>
    )
}