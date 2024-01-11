import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { selectTotalTodos } from "./redux/todoSlice";

function App() {
  const totalTodos = useSelector(selectTotalTodos);

  return (
    <div className="App w-full h-screen flex justify-center items-center bg-gray-100">
      <div className=" bg-white p-6 rounded-lg shadow-lg border-2">
        <h1 className="text-2xl font-bold mb-4 ">Todo List</h1>
        <TodoForm />
        <TodoList />
        <h1 className="text-lg font-bold text-right ">count: {totalTodos}</h1>
      </div>
    </div>
  );
}

export default App;
