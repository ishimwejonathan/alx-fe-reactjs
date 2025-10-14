import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    const todo = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Todo List</h1>

      <form onSubmit={addTodo} data-testid="add-todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
          className="border p-2 w-full rounded mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Todo
        </button>
      </form>

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            data-testid="todo-item"
            className={`flex justify-between items-center p-2 border rounded cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              data-testid="delete-btn"
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
