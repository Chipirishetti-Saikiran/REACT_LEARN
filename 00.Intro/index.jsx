import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <button onClick={() => alert("Button Clicked!")}>Click Me!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
