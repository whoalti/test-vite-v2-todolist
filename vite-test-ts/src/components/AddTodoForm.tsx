import {useState} from "react";

interface AddTodoProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddTodoProps) {
  const [input, setInput] = useState("");

  return (
    <form
      className="flex"
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
      }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="rounded-s-md grow border border-gray-400 p-2"
        placeholder="What has to be done?"
      ></input>
      <button
        type="submit"
        className="w-20 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Add todo
      </button>
    </form>
  );
}
