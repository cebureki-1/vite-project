import { useEffect, useState } from "react";


export default function NewTask() {

  const [count, setCount] = useState(true);
  function add() {
    setCount(count + 1);
  }

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])


  useEffect(() => {
    const newCount = localStorage.getItem("count");
    if (newCount)
      setCount(parseInt(newCount))
  }, [])

  
  
 // console.log("Aqparat alunyda");

  return (
    <div>
      <h1 style={{background: count ? "green" : "red"}}>{toString(count)}</h1>
      <button onClick={()=>{setCount(!count)}}>+</button>
    </div>
  );
}