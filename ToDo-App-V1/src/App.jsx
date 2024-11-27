import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const todoItems = [
  ];

  const [ntodoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`${itemName} and ${itemDueDate}`);
    const addedItems = [ ...ntodoItems,{name: itemName ,dueDate: itemDueDate }];
    setTodoItems(addedItems);
  };



  const handleDeleteItem = (deletedItem)=> {
    const filterDelete = ntodoItems.filter(item => item.name != deletedItem);
    setTodoItems(filterDelete);
    
  }

  return (
    <>
      <center className="todo-container">
        <AppName />

        <AddTodo onNewItem={handleNewItem} />
        {ntodoItems.length === 0 && <WelcomeMsg />}
        <TodoItems onDeleteClick={handleDeleteItem} todoItems={ntodoItems} />
      </center>
    </>
  );
}

export default App;
