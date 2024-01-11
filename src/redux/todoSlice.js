import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export const selectTotalTodos = (state) => state.todos.length;
export default todosSlice.reducer;
