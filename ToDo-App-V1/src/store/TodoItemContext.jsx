import { createContext, useReducer } from "react";

export const TodoItemContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// console.log(TodoItemContext);

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name != action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  // const todoItems = [];

  const [ntodoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  //const [ntodoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);

    /*const addedItems = [
      ...ntodoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(addedItems);*/
  };

  const deleteItem = (deletedItem) => {
    /*const filterDelete = ntodoItems.filter((item) => item.name != deletedItem);*/
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: deletedItem,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoItems: ntodoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemsContextProvider;
