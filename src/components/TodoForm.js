// src/components/TodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
      setText("");
    }
  };

  return (
    <form className=" bg-slate-200 rounded-lg" onSubmit={handleSubmit}>
      <input
        className=" focus:outline-none p-1 rounded-lg bg-transparent"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button className=" bg-blue-400 text-white p-1 rounded-md" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
