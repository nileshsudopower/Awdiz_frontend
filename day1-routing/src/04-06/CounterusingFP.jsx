import { useState } from "react";

function CounterUsingFP() {
    const [counter, setCounter] = useState(1);
    function Increment(){
     setCounter(counter+1);  
  }
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <ChildCounter Increment = {Increment}/>
        <ChildCounterDec Decrement = {Decrement} />
    </div>
  )
  function Decrement(){
    setCounter(counter - 1)
  }

  function ChildCounter({Increment}){
    return(
        <button onClick={Increment}>+</button>
    
    )
  }
  function ChildCounterDec({Decrement}){
    return(
        <button onClick={Decrement}>-</button>
    
    )
  }
}
export default CounterUsingFP;