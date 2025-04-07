import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
function NavBar() {
  return (
    <nav>
      <Link to="/profile" >My Profile</Link>
      <Link to="/projects" >My Projects</Link>
      <Link to="/about" >About Me</Link>
    </nav>
  );
}

function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Profile</h1>
      <p>Name: Imangali</p>
      <p>Email: example@email.com</p>
      <p>Academy: Amjile CyberSchool</p>
      <button onClick={() => navigate("/projects")}>Go to My Projects</button>
    </div>
  );
}

function Projects() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li><strong>Weather Site</strong></li>
        <li><strong>Online Store</strong></li>
        <li><strong>Police Info</strong></li>
      </ul>
      <button onClick={() => navigate("/about")}>Go to About Me</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Me</h1>
      <p>I am learning IT and working on web projects.</p>
      <button onClick={() => navigate("/profile")}>Go to My Profile</button>
    </div>
  );
}

function NotFound() {
    const Message = "404 This path not found"
    alert(`Not found ${Message} and I translated you About US `)
  return <About />;
}


