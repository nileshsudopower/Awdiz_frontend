
import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(10);
  useEffect(() => {
    alert("UseEffect No dependancy.");
    
  });

  //  Same as window.onload = userStartedBrowsing();
  return (
    <div>
    <h1>Counter 1 : {counter} </h1>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => setCounter(counter - 1)}>-</button>
   
    <h1>Counter 2 : {counter2} </h1>
    <button onClick={() => setCounter2(counter2 + 1)}>+ </button>
    <button onClick={() => setCounter2(counter2 - 1)}>- </button>
      
      <h2>UseEffect Type 1: No Dependancy</h2>
    </div>
  );
}

export default UseEffect;
