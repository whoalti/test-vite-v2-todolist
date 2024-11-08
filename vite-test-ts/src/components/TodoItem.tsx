import {Trash2} from "lucide-react";
import {Todo} from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompleteChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-200 bg-white hover:bg-slate-50">
        <input
          type="checkbox"
          checked={todo.completed}
          className="scale-125"
          onChange={(e) => {
            onCompleteChange(todo.id, e.target.checked);
          }}
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
