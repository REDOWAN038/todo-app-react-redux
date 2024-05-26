import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    filter: "ALL",
    search: ""
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, { text: action.payload, completed: false }];
        },

        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo, index) =>
                index === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo, index) => index !== action.payload);
        },

        markComplete: (state, action) => {
            state.todos = state.todos.map((todo, index) =>
                index === action.payload ? { ...todo, completed: true } : todo
            );
        },

        markIncomplete: (state, action) => {
            state.todos = state.todos.map((todo, index) =>
                index === action.payload ? { ...todo, completed: false } : todo
            );
        },

        filterTodos: (state, action) => {
            state.filter = action.payload;
        },

        searchTodos: (state, action) => {
            state.search = action.payload;
        },

        markAllCompleted: (state) => {
            state.todos = state.todos.map((todo) => ({
                ...todo,
                completed: true
            }));
        }
    },
});

export const {
    addTodo,
    toggleTodo,
    removeTodo,
    markComplete,
    markIncomplete,
    markAllCompleted,
    filterTodos,
    searchTodos
} = todoSlice.actions;

export default todoSlice.reducer;
