import React from "react";
import { useAtom } from "jotai";
import { todosAtom } from "../../store";

const TodoList = () => {
  const [todos] = useAtom(todosAtom);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
