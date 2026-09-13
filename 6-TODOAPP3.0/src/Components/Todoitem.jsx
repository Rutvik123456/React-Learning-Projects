import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { Toitemcontex } from "../store/todo-item-store";

function Todoitem({ task, date }) {
  const { onDeleteClick } = useContext(Toitemcontex);

  return (
    <div className="container text-center">
      <div className="row items-container">
        <div className="col-6">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger react-btn"
            onClick={() => onDeleteClick(task)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
