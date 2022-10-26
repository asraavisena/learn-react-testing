import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();
describe("Add Input form", () => {
  it("Should render Input element", () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodo}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument();
  });

  it("Should type into Input element", () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodo}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, { target: { value: "Go grocery Shopping" } })
    expect(inputElement.value).toBe("Go grocery Shopping");
  });

  it("Should have empty input when add button is clicked", () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockedSetTodo}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: "Add" })
    fireEvent.change(inputElement, { target: { value: "Go grocery Shopping" } })
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("");
  });
})
