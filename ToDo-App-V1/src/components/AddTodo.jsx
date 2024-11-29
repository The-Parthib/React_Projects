import { useRef } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddBtn = (event) => {
    event.preventDefault();
    const todoItem = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value="";
    console.log(todoItem, dueDate);
    onNewItem(todoItem, dueDate);
  };

  return (
    <>
      <form className="container text-center " onSubmit={handleAddBtn}>
        <div className="row left">
          <div className="col-6">
            <input
              ref={todoNameElement}
              type="text"
              placeholder="Enter Your Works"
            />
          </div>
          <div className="col-4">
            <input ref={dueDateElement} type="date" />
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
