import React, { useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Search from "./components/Search/Search";
import TodoList from "./components/TodoList/TodoList";
import { useTodos } from "./store";

function App() {
  const [todos, setTodos] = useTodos([]);
  return (
    <div className="App">
      <Grid container spacing={3} direction="row" alignItems="baseline">
        <Grid item xs={12}>
          <Search setTodos={setTodos} todos={todos} />
        </Grid>
        <Grid item xs={12}>
          <TodoList setTodos={setTodos} todos={todos} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
