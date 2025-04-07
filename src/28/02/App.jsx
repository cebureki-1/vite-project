import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import Test from "../test/App.jsx"
import App2 from "./App2.jsx"
import App3 from "./App3.jsx"
import App4 from "./App4.jsx"
export default function App(){

    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<App2 />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/Test2" element={<App3 />}/>
            <Route path="/Test3" element={<App4 />}/>
            <Route path="*" element={<Notfound />}/>
            
        </Routes>
        </BrowserRouter>
    )
}
function Navbar(){
    return(
        <nav>
            <Link to="/about">Error 404</Link> {" | "}
            <Link to="/">Home</Link> {" | "}
            <Link to="/Test2">About</Link> {" | "}
            <Link to="/Test3">test4</Link> {" | "}
            <Link to="/Test">Test</Link> {" | "}
        </nav>
        
    )
}

function Home(){
    return <h1>Home</h1>
}

function About(){
    return <h1>About</h1>
}

function Contact(){
    return <h1>Contact</h1>
}
function Notfound(){
    return <h1>Notfound</h1>
}