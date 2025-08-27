function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome Back! IF_ELSE 🎉</h1>;
  } else {
    return <h1>Please Login 🔑IF_ELSE</h1>;
  }
}

function If_Else() {
  return <Greeting isLoggedIn={false} />;
}

export default If_Else;