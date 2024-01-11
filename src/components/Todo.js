import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div
      className={`flex items-center rounded-md space-x-1 my-2  ${
        todo.completed ? "bg-green-300 " : "bg-slate-200"
      }`}
    >
      <label className="w-full hover:cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="mx-2"
        />
        <span className="w-full">{todo.text}</span>
      </label>
      <button
        className="bg-red-400 text-white p-1 rounded-md"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Remove
      </button>
    </div>
  );
};

export default Todo;
