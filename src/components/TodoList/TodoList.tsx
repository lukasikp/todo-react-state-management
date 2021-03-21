import React from "react";
import { useAtom } from "jotai";
import { todosAtom } from "../../store";
import { SetTodosType, TodosType } from "../../store";

const TodoList = ({
  todos,
  setTodos,
}: {
  todos: TodosType;
  setTodos: SetTodosType;
}) => {
  return (
    <>
      <h2>Todos</h2>
      <TodoListItem setTodos={setTodos} todos={todos} />
    </>
  );
};

const TodoListItem = ({
  todos,
  setTodos,
}: {
  todos: TodosType;
  setTodos: SetTodosType;
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
