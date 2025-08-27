//Counter Example 

import { useState } from "react";

const Counter_USESTATE = () =>{
    const [count,setCount]=useState(0);

    return(<>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <button onClick={()=>setCount(count-1)}>Dec</button>
    </>);
};

export default Counter_USESTATE;