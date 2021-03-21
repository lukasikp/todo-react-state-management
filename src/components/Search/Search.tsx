import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SetTodosType, addTodo, TodosType } from "../../store";

const Search = ({
  todos,
  setTodos,
}: {
  todos: TodosType;
  setTodos: SetTodosType;
}) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <TextField
        label="Search input"
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
      />

      <Button onClick={() => setTodos(addTodo(todos, newTodo))}>
        Add todo
      </Button>
    </>
  );
};

export default Search;
