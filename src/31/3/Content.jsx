import { useContext } from "react";
import LanguageContext from "./LanguageContext"

export default function App() {
    const { state } = useContext(LanguageContext)
    console.log(state);
    
    const languagescontext = {
        kk: "Салем",
        ru: "Привет",
        en: "hello"
    }

    const thislanguage = languagescontext[state.language]

    return (
        <>
        <h1>Transition: {thislanguage}</h1>
        </>
    )
}