import { useContext } from "react"
import React from "react"
 

const App = () => {
    const toy = "машина"
    const toyContext = React.createContext()
    return (
        <toyContext.Provider value={toy}>
            <Parent />
        </toyContext.Provider>
    )
}

const Grantparent = () => {
    const toy = "машина"
    return <Parent toy={toy}/>
}

const Parent = ({toy}) => {
    return <Child toy={toy || "robot"} />
}

const Child = ({toy}) => {
    return <div>менын ойншыгым {toy}</div>
}
export default App