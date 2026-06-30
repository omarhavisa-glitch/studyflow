import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        done: false,
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
              done: !todo.done,
            }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(
      todos.filter(
        (todo) => todo.id !== id
      )
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-5">
        📋 Tugas Hari Ini
      </h2>

      <div className="flex gap-3 mb-5">
        <input
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
          placeholder="Tambah tugas..."
          className="flex-1 border rounded-xl p-3"
        />

        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-5 rounded-xl"
        >
          Tambah
        </button>
      </div>

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center border rounded-xl p-4 mb-3"
        >
          <p
            className={
              todo.done
                ? "line-through text-slate-400"
                : ""
            }
          >
            {todo.text}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() =>
                toggleTodo(todo.id)
              }
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              ✓
            </button>

            <button
              onClick={() =>
                deleteTodo(todo.id)
              }
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;