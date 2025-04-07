import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ℹ️ About Us</h1>
      <button onClick={() => navigate(-1)}>🔙 Go Back</button>
    </div>
  );
}

export default About;
