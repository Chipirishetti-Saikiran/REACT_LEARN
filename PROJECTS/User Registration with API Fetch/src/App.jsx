import { useState,useEffect } from 'react';

function App(){
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch initial data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") return;

    const newUser = { id: users.length + 1, name };
    setUsers([...users, newUser]);
    setName("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>👤 User Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <h2>User List:</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
