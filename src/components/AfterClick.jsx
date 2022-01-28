import React from "react";
import ReactDOM from "react-dom";





  const FunctionalComponent = () => {
    const clicked= React.useState(false);
   
    return (
      <div>
        <h1>You entered an URl!</h1>
        <button onClick={() => true}>Click</button>
      </div>
    );
   };

   export default FunctionalComponent;


