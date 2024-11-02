import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {dummyData} from "@data/todos";
import TodoItem from ".@components/Todoitem";
import AddTodoForm from "@components/AddTodoForm";
import TodoList from "@components/TodoList";
import TodoSummary from "@components/TodoSummary";
import {Todo} from "@types/todo";
import useTodos from "@hooks/useTodos";

function App() {
  const {todos, addTodo, deleteAllTodos, deleteTodo, setTodoCompleted} =
    useTodos();
  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3x1 text-center"> Your todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-5">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onCompleteChange={setTodoCompleted}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllTodos} />
    </main>
  );
}

export default App;
