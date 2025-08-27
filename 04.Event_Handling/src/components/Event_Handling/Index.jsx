const Button=()=>{
    function handleClick(){
        alert("Button Clicked");
    };

    return(
        <button onClick={handleClick}>Click</button>
    );
}

export default Button;