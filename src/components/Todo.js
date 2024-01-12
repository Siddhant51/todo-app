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
      <label className=" flex flex-row w-full max-w-80 hover:cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="mx-2"
        />
        <div className=" w-full max-w-80 word-break: break-all">
          {todo.text}
        </div>
      </label>
      <button
        className=" bg-red-400 h-full text-white py-1 px-2 rounded-md"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Remove
      </button>
    </div>
  );
};

export default Todo;
