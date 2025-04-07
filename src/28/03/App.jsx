import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:username" element={<UserProfile/>} />
      </Routes>
    </Router>
  );
}



function UserProfile() {
  const { username } = useParams();
  return <h1>Welcome, {username}!</h1>;
}

export default App;
