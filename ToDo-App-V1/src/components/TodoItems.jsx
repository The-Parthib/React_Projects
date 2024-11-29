import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemContext";
import TodoItem from "./TodoItem";

const TodoItems = () => {

  const { todoItems } = useContext(TodoItemContext);
  console.log(todoItems);
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item}
          task={item.name}
          date={item.dueDate}
        />
      ))}
    </>
  );
};

export default TodoItems;