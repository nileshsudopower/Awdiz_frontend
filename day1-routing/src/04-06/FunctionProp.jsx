

function FunctionProp() {

    function ClickMe() {
        alert("You Have Clicked")
        console.log("Clicked.");
    }
    return (
      <div>
        <h1>FunctionProp</h1>
        <ChildrenComponent buttonValue="Click Me!" ClickMe={ClickMe} />
      </div>
    );
  }
  
  function ChildrenComponent({ buttonValue, ClickMe }) {
    return <button onClick={ClickMe}>{buttonValue}</button>;
  }

  export default FunctionProp;