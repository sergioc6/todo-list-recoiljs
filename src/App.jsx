import { useRecoilValue } from "recoil";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoListStats from "./components/TodoListStats";
import TodoListFilters from "./components/TodoListFilters";
import { filteredTodoListState } from "./recoil/selectors";

function App() {

  const todoList = useRecoilValue(filteredTodoListState);
  console.log(todoList);
  
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) =>
        <TodoItem key={todoItem.id} item={todoItem} />
      )}

    </>
  );
}

export default App;
