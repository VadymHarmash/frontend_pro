import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Todo } from "./index";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Todo", () => {
  test("shows title", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );
    expect(screen.getByText("Todo")).toBeInTheDocument();
  });

  test("allows entering text and numbers in the input field", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );

    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "123abc" } });

    expect(inputField.value).toBe("123abc");
  });

  test("does not add a todo if the input is empty", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );

    const addButton = screen.getByText("Add todo");
    fireEvent.click(addButton);

    const todos = screen.queryAllByRole("listitem");
    expect(todos.length).toBe(0);
  });

  test("adds a new todo when text is entered and the add button is clicked", async () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );

    const inputField = screen.getByRole("textbox");
    const addButton = screen.getByText("Add todo");

    fireEvent.change(inputField, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    const newTodo = await screen.findByText("New Todo");
    expect(newTodo).toBeInTheDocument();
  });

  test("clears input field after adding a new todo", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );

    const inputField = screen.getByRole("textbox");
    const addButton = screen.getByText("Add todo");

    fireEvent.change(inputField, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(inputField.value).toBe("");
  });

  test("displays loading text while todos are being fetched", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
