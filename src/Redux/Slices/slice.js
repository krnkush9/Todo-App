import { createSlice } from "@reduxjs/toolkit";

// creating slice using createSlice
export const todoSlice = createSlice({
    name: "list",
    initialState: [],
    reducers: {
        // function for the add task
        addTask(state, action) {
            state.push({ id: state.length + 1, task: action.payload });
        },

        // function for the remove task
        removeTask(state, action) {
            return state.filter(currItem => currItem.id !== action.payload)
        }
    }
})

// exporting the functions
export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;