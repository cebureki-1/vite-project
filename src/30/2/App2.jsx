import { useContext } from "react"
import {toyContext} from "./App.jsx"
export default function App() {
    const toys = React.useContext(toyContext)
    return (
        <h1>{toys}</h1>
    )
}