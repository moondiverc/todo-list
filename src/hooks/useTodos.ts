import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodods: Todo[] = JSON.parse(localStorage.getItem("todos") || "[");
    return savedTodods.length>0 ? savedTodods : dummyData
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  // jadi buat array ini, artinya useEffect ini akan selalu execute tiap state dari var di array itu berubah
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      // map generate completely new array, harus pake setTodos karna kalo gapake dia cuma modify arraynya aja dan dia pake referensi sebelumnya
      prevTodos.map((todo => (todo.id === id ? {...todo, completed} : todo))));
  }

  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        // pake date now agar tiap id unik, awalnya pake length+1 tp ga efektif dan ada bug
        id: Date.now(),
        title,
        completed: false
      },
      ...prevTodos
    ])
  }

  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function deleteAllCompletedTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }
  return {
    todos, setTodoCompleted, addTodo, deleteTodo, deleteAllCompletedTodos
  }
}