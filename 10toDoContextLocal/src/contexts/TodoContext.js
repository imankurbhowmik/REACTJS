import { useContext, createContext} from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1, text: "Learn React", completed: false },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, Todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;