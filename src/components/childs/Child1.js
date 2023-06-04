import React, { useRef } from "react"
import { useDispatch } from "react-redux";
import { setMessage } from "../../slices/messageslice";

function Child1() {

    const inputRef = useRef(null);

    const dispatch = useDispatch(); 

    function handleSubmit(e) {
        e.preventDefault();
        const inputTextValue = inputRef.current.value;
        dispatch(setMessage(inputTextValue));
    }

  return (


    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Child1;