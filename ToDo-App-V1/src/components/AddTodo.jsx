import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoItem, setTodoItem] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoItem(event.target.value);
  };
  const handleDAteChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddBtn = () => {
    onNewItem(todoItem, dueDate);
    setTodoItem("");
    setDueDate("");
  };

  return (
    <>
      <div className="container text-center ">
        <div className="row left">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Your Works"
              value={todoItem}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDAteChange} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-success ppbtn"
              onClick={handleAddBtn}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
