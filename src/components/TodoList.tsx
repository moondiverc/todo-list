import TodoItem from "./TodoItem"
import type { Todo } from "../types/todo"

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({todos, onCompletedChange, onDelete}: TodoListProps){
    // algoritma buat sorting
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    })
    
    return (
        // buat ngerender list todo
        <>
        <div className="space-y-2">
            {todosSorted.map(todo => (
            <TodoItem key={todo.id} todo={todo} onCompletedChange={onCompletedChange} onDelete={onDelete}/>
            ))}
        </div>
        {todos.length ===0 && (
            <p className="text-center text-sm text-gray-500">
                No todos yet. Add a new one above.
            </p>
        )}
        </>
    )
}