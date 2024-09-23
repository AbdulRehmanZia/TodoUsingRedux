import React, { useState } from "react";

function AddTodo() {
    const [input, setInput] = useState("")
  return (
    <>
      <label>Enter Your Todo</label>
      <input
        type="Text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={HandleAddTodo()}>Add</button>
    </>
  );
}

export default AddTodo;
