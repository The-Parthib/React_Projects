import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemContext } from "../store/TodoItemContext";

function TodoItem({ task, date }) {
  //   let task = "Buy Milk";
  //   let date = "15/10/2004";
  const { deleteItem } = useContext(TodoItemContext);

  return (
    <>
      <div className="container text-center table">
        <div className="row left">
          <div className="col-6">{task}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-danger ppbtn"
              onClick={() => deleteItem(task)}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
