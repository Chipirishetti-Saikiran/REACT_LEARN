//Using DOM(useRef hook) we will handle form data,The input manages itself using refs (like vanilla JS).

//React doesn’t control value.

import { useRef } from "react";

function UncontrolledForm(){
    const input_value=useRef();

    function handleSubmit(e){
        e.preventDefault();
        alert("Entered "   +input_value.current.value);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={input_value} />
                <button type="submit">Submit</button>
            </form>
        
        </>
    )
}

export default UncontrolledForm;