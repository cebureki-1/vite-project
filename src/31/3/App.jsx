import React, { useReducer } from 'react'
import LanguageSwitcher from './Languageswitcher'
import Content from './Content'
import LanguageContext from './LanguageContext'


let initialState = {
    language: 'kk'
}

function reducer(state, action) {
    switch (action.type) {
        case "til_austyr":
            return {
                language: action.payload
            }
        default:
            return state
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <LanguageContext.Provider value={{ state, dispatch }}>
            <LanguageSwitcher />
            <Content />
        </LanguageContext.Provider>
    )
}
