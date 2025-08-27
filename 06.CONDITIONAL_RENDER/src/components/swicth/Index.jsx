function Greet({ value }) {
  switch (value) {
    case "LogIn":
      return <h1>Logged Here Switch</h1>;
    case "LogOut":
      return <h1>LogOut Here Switch</h1>;
    case "error":
      return <h1>errorHere Switch</h1>;
    default:
      return <h1>Default Swicth</h1>;
  }
}


const Swicth = () =>{
    return <Greet value={"error"} />
}; 

export default Swicth;