import React from "react";
import Counter_USESTATE from "./components/use_state/Index";
import Counter_SETSTATE from "./components/set_state/Index";

const App = () =>{
  return (
      <>
      <div>
        <h1>USE STATE COUNTER</h1>
        <Counter_USESTATE/>
      </div>
      <div>
        <h1>SET STATE COUNTER</h1>
        <Counter_SETSTATE/>
      </div>
      
      </>
  )
};

export default App;