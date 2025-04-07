
import { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    localStorage.setItem("User",JSON.stringify(theme))
  }, [theme]);

  const toggleTheme = () => {
   if (theme == "white"){
    setTheme("black")
   }else(
    setTheme("white")
   )
  };

  return (
    <nav style={{ backgroundColor: theme, padding: "10px" }}>
      <button onClick={toggleTheme}>Түсін өзгерту</button>
    </nav>
  );
}

export default Navbar;


