import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </Router>
  );
}

function Home() { return <h1>🏠 Home Page</h1>; }
function Profile() { return <h1>👤 Profile Page</h1>; }
function Posts() { return <h1>📝 Posts Page</h1>; }
function About() { return <h1>ℹ️ About Page</h1>; }

function Surprise() {
  const navigate = useNavigate();
  const pages = ["/", "/profile", "/posts", "/about"];

  const goToRandomPage = () => {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    navigate(randomPage)
  };

  return (
    <div>
      <h1>🎉 Surprise Page!</h1>
      <button onClick={goToRandomPage}>Surprise Me!</button>
    </div>
  );
}
