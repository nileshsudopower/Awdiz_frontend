import { useEffect, useState } from "react";

function UseEffect1() {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    alert("Type 2 : Empty Dependencies");
  }, []);
  return (
    <div>
      <h1>UseEffect Type 2 : Empty Dependencies</h1>
      <h1>Counter State Change {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default UseEffect1;
