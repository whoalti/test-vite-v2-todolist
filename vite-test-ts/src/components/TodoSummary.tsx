import {Todo} from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-3">
      <p>
        {completedTodos.length}/{todos.length} tasks completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-red-600 hover:underline text-sm font-medium"
        >
          Delete All completed
        </button>
      )}
    </div>
  );
}
