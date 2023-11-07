import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/ITodo";
import { generateId } from "../utils/generateId";

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ title: action.payload, id: generateId(10), isDone: false });
    },
    editTodo: (
      state,
      action: PayloadAction<{ todoId: string; newTitle: string }>
    ) => {
      const { todoId, newTitle } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === todoId);
      if (todoToEdit) {
        todoToEdit.title = newTitle;
      }
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      const todoToComplete = state.find((todo) => todo.id === action.payload);
      if (todoToComplete) {
        todoToComplete.isDone = true;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, removeTodo, completeTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
