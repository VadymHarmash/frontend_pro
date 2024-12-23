import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../store/thunks/todosThunk";
import styles from "./todo.module.scss";

export const Todo = () => {
  const { todos, loading } = useSelector((state) => state.todoReducer);
  const [todoText, setTodoText] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addNewTodo = () => {
    if (todoText.trim() !== "") {
      const newTodo = {
        title: todoText,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTodoText("");
    }
  };

  const startEditing = (todo) => {
    setEditText(todo.title);
    setEditId(todo.id);
  };

  const saveEdit = () => {
    if (editText.trim() !== "") {
      const updatedTodo = {
        id: editId,
        title: editText,
        completed: false,
      };
      dispatch(updateTodo(updatedTodo));
      setEditText("");
      setEditId(null);
    }
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.todoContainer}>
      <h1>Todo</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className={styles.todoList}>
            {todos.map((todo) => (
              <li key={todo.id} className={styles.todoItem}>
                {editId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <span>{todo.title}</span>
                )}
                <div>
                  <button
                    onClick={() => startEditing(todo)}
                    className={styles.editButton}
                  >
                    Edit
                  </button>
                  {editId === todo.id ? (
                    <button onClick={saveEdit} className={styles.saveButton}>
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => removeTodo(todo.id)}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
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
