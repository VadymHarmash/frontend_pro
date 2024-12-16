import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/reducers/todoSlice";
import styles from "./todo.module.scss";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  const addNewTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <div className={styles.todoContainer}>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <div className={styles.inputField}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </div>
      <button className={styles.addButton} onClick={addNewTodo}>
        Add todo
      </button>
    </div>
  );
};
