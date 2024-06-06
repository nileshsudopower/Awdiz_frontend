import { useEffect ,useState } from "react";
function UseEffect3(){
    const[counter, setCounter] = useState(1);
    // const[counter1, setCounter2] =useState(true)

    function Increment(){
        setCounter((prevValue) => prevValue + 1);
    }
    function Decrement(){
        if (counter > 1) {
            setCounter((prevValue) => prevValue - 1);
          }
    }
    
    return (
        <div>
            {counter>=10 && counter<=20  ? (
        <h1 >Counter is in between 10-20</h1>
      ) : (
        <h1 >Counter is out of range</h1>
      )}
      <h1>Counter : {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
        </div>
    );
}
export default UseEffect3;