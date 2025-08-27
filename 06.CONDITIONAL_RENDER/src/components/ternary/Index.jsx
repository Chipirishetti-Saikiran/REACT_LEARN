//Ternary  

const Greet = ({logIn}) =>{
    return <h1>{logIn?"Wlcome Here Ternary":"Please Login Ternary"}</h1>
};

const Ternary = () =>{
    return <Greet logIn={true} />
}

export default Ternary;