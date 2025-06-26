import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    st: null,
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos.push({ ...newTodo, id: uuid.v4() });
      console.log(state.todos);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((item) => item.id != id);
    },
    chageState: (state, action) => {
      const id = action.payload;
      const item = state.todos.find((item) => item.id == id);
      item.isDone = !item.isDone;
      console.log(item);
    },
    setSt: (state, action) => {
      state.st = action.payload;
    },
  },
});

export const { addTodo, removeTodo, chageState, setSt } = todoSlice.actions;
export default todoSlice;
