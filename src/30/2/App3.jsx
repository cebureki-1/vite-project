import { useContext } from "react"
import { useEffect, useState } from "react"
export default function App() {
    const [color, SetColor] = useState(true)
    const divs = React.createContext()
    return (
        <divs.Provider value={color}>
           { SetColor(!color) }
        </divs.Provider>
    )
}

const Grantparent = () => {
    return (
        <>
        <div style={{width:"200px", height:"200px", backgroundColor: color ? "red" : "green"}}>dfdfdf</div>
        </>
    )
}