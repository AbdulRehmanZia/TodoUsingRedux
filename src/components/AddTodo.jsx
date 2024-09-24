import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const HandleAddTodo = (e) => {
    dispatch(addTodo(input))
    setInput('')
  };
  return (
    <>
      <label>Enter Your Todo</label>
      <input
        type="Text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={HandleAddTodo}>Add</button>
    </>
  );
}

export default AddTodo;
