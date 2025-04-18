import React,{ useContext } from "react"
import LanguageContext from  "./LanguageContext.jsx"

export default function LanguageSwitcher(){

    const {state, dispatch} = useContext(LanguageContext)

    console.log(state);
    
    return(
        <>
        <select 
        value={state.Language}
        onChange={(e)=>dispatch({type: "til_austyr", payload: e.target.value})}
        >
            <option value="ru">Привет</option>
            <option value="kk">Салем</option>
            <option value="en">hello</option>
        </select>
        </>
    )
}