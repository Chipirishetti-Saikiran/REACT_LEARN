
import { useState } from "react";

const App =()=>{
  const [tasks,setTasks]=useState([]);

  const [input,setInput]=useState("");

  function addTask(e){
    e.preventDefault();
    if(input.trim==="")return;
    setTasks([...tasks,input]);
    setInput("");
  }


  return(

<div style={{ textAlign: "center", marginTop: "30px" }}>
  <h1>✅ To-Do List</h1>
  <form onSubmit={addTask}>
    <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Enter Task"/> 
    <button type="submit">Add</button>
  </form>

  <ul>
    {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
  </ul>
</div>


  );
};

export default App;