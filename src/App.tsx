import React from "react";
import "./App.css";
import { Provider as JotaiProvider } from "jotai";
import Grid from "@material-ui/core/Grid";
import Search from "./components/Search/Search";
import TodoList from "./components/TodoList/TodoList";
function App() {
  return (
    <JotaiProvider>
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Search />
            <TodoList />
          </Grid>
        </Grid>
      </div>
    </JotaiProvider>
  );
}

export default App;
