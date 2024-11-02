import {useEffect, useState} from "react";
import {Todo} from "../types/todo";
import {dummyData} from "../data/todos";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]",
    );
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? {...todo, completed} : todo)),
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: Date.now(), // to easier usage
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }
  return {
    todos,
    deleteTodo,
    deleteAllTodos,
    addTodo,
    setTodoCompleted,
  };
}
