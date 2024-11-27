import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          onDeleteClick={onDeleteClick}
          key={item}
          task={item.name}
          date={item.dueDate}
        />
      ))}
    </>
  );
};

export default TodoItems;