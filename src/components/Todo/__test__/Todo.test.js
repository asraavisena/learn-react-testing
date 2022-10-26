import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}

const addTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole("button", { name: "Add" })
  tasks.forEach(el => {
    fireEvent.change(inputElement, { target: { value: el } })
    fireEvent.click(buttonElement)
  })
}

describe("Todo", () => {
  it("Should render same div same with input element", async () => {
    render(<MockTodo title={"My Header"} />);
    addTodo(["Go grocery Shopping"])
    const divElement = screen.getByText(/Go grocery Shopping/i)
    expect(divElement).toBeInTheDocument();
  });

  it("Should render same div with many inputs", async () => {
    render(<MockTodo title={"My Header"} />);
    addTodo(["Go grocery Shopping", "tesing1", "testingan"])
    const divElement = screen.getAllByTestId("todo-container")
    expect(divElement.length).toBe(3);
  });

  it("Should render completed task", async () => {
    render(<MockTodo title={"My Header"} />);
    addTodo(["Go grocery Shopping", "tesing1", "testingan"])
    const divElement = screen.getByText(/Go grocery Shopping/i)
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("Should render incompleted task", async () => {
    render(<MockTodo title={"My Header"} />);
    addTodo(["Go grocery Shopping"])
    const divElement = screen.getByText(/Go grocery Shopping/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active");
  });
})