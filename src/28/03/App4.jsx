import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundGame />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function NotFoundGame() {
  const navigate = useNavigate();
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks+1)
    if(clicks == 5){
        alert("go home")
        navigate("/")
    }
   
  };

  return (
    <div>
      <h1>🎮 404 Mini Game</h1>
      <p>Click the button 5 times to go back home!</p>
      <button onClick={handleClick}>Click Me ({clicks}/5)</button>
    </div>
  );
}

