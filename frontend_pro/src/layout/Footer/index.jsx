import React from "react";
import { useSelector } from "react-redux";

export const Footer = () => {
  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <footer
      style={{
        textAlign: "center",
      }}
    >
      <p>Todos count: {todos.length}</p>
    </footer>
  );
};
