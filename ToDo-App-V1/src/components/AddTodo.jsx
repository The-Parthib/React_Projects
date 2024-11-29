import { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoItem, setTodoItem] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoItem(event.target.value);
  };
  const handleDAteChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddBtn = (event) => {
    event.preventDefault();
    onNewItem(todoItem, dueDate);
    setTodoItem("");
    setDueDate("");
  };

  return (
    <>
      <form className="container text-center " onSubmit={handleAddBtn}>
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
            <button type="submit" className="btn btn-outline-success ppbtn">
              <MdOutlineAddCircle />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
