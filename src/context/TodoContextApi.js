import { useContext, createContext, } from "react";

export const TodoContext = createContext({
    todos: [{ id: 1, text: "Enter your Todo", completed: false }],
    addTodo: (todo) => { },
    removeTodo: (id) => { },
    updateTodo: (todo, id) => { },
    toggleTodo: (id) => { },
});


export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;