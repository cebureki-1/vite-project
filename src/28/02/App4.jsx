import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home onLogout={() => setUser(null)} /> : <Login onLogin={() => setUser("User")} />} />
        <Route/>
      </Routes>
    </Router>
  );
}

function Login({ onLogin }) {
  const navigate = useNavigate();
  
  const handleLogin = () => {
       Home(onLogin)
};

  return <button onClick={handleLogin}>🔑 Кіру</button>;
}

function Home({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/")
  };

  return (
    <div>
      <h1>🏠 Home Page</h1>
      <button onClick={handleLogout}>🚪 Шығу</button>
    </div>
  );
}

export default App;
