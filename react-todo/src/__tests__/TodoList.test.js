import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter new todo");
    const form = screen.getByTestId("add-todo-form");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.submit(form);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("line-through");

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("line-through");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByTestId("delete-btn");

    // delete first todo
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
