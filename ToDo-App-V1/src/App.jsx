import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import TodoItemsContextProvider, { TodoItemContext } from "./store/TodoItemContext";

;

function App() {

  return (
    <>
      <TodoItemsContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
