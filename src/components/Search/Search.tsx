import TextField from "@material-ui/core/TextField";
import { useAtom } from "jotai";
import { newTodoAtom, addTodoAtom } from "../../store";

const Search = () => {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  return (
    <>
      <TextField
        label="Search input"
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
      />
      <button onClick={() => addTodo()}>Add todo</button>
    </>
  );
};

export default Search;
