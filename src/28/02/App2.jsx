import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
        alert("dont work Home")
      navigate("/")
    }, 5000);
  }, []);

  return <h1>❌ 404 Not Found (5 сек. ішінде қайтамыз)</h1>;
}

export default NotFound;

