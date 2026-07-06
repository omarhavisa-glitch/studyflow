import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function TodoList() {
  const { darkMode } = useTheme();
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("studyflow_todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "studyflow_todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  function addTodo() {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  const completed =
    todos.filter((t) => t.completed).length;

  return (
    <div
      className={`rounded-3xl shadow-sm border p-6 mt-8 ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          📝 Todo List
        </h2>

        <span
          className={`text-sm ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {completed} / {todos.length} Completed
        </span>

      </div>

      <div className="flex gap-3 mb-6">

        <input
          type="text"
          placeholder="Tambah tugas..."
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
          className={`flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-slate-900 border-slate-600 text-white placeholder-slate-500"
              : "bg-white border-slate-300 text-slate-900"
          }`}
        />

        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 transition"
        >
          Add
        </button>

      </div>

      {todos.length === 0 ? (
        <p
          className={`text-center py-8 ${
            darkMode ? "text-slate-500" : "text-slate-400"
          }`}
        >
          Belum ada tugas.
        </p>
      ) : (
        <div className="space-y-3">

          {todos.map((todo) => (

            <div
              key={todo.id}
              className={`flex justify-between items-center border rounded-xl p-4 ${
                darkMode
                  ? "border-slate-600"
                  : "border-slate-200"
              }`}
            >

              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    toggleTodo(todo.id)
                  }
                />

                <span
                  className={
                    todo.completed
                      ? `line-through ${
                          darkMode ? "text-slate-500" : "text-slate-400"
                        }`
                      : ""
                  }
                >
                  {todo.text}
                </span>

              </div>

              <button
                onClick={() =>
                  deleteTodo(todo.id)
                }
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default TodoList;