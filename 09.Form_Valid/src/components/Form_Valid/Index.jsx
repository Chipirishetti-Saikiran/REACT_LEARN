import { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email ❌");
    } else {
      setError("");
      alert("Signed up with " + email);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <p style={{ color: "red" }}>{error}</p>
      <button type="submit">Signup</button>
    </form>
  );
}


export default SignupForm;