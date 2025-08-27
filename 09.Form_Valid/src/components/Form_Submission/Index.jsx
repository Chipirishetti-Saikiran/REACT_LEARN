import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop reload
    alert("Submitted: " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;