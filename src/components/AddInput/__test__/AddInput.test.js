import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

it("should exist in document", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

  expect(inputElement).toBeInTheDocument();
});

it("should be able to type in input", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

  fireEvent.change(inputElement, { target: { value: "Test" } });

  expect(inputElement.value).toBe("Test");
});

it("should be empty when add button is clicked", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  fireEvent.change(inputElement, { target: { value: "Test" } });
  fireEvent.click(buttonElement);

  expect(inputElement.value).toBe("");
});
