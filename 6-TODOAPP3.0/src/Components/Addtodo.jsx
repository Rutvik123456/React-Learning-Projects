import { MdAddComment } from "react-icons/md";
import { useContext, useRef} from "react";
import { Toitemcontex } from "../store/todo-item-store";

function Addtodo() {

  const {onAddclick} = useContext(Toitemcontex);

  const refforitem = useRef();
  const reffordate = useRef();

  const onAddbtnclick = () => {
    event.preventDefault();
    const curitem = refforitem.current.value;
    const curdate = reffordate.current.value;
    refforitem.current.value = "";
    reffordate.current.value = "";
    onAddclick(curitem, curdate);
  };

  return (
    <div className="container text-center">
      <form onSubmit={onAddbtnclick} className="row items-container">
        <div className="col-6">
          <input type="text" placeholder="to do task" ref={refforitem} />
        </div>
        <div className="col-4">
          <input type="date" ref={reffordate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success react-btn"><MdAddComment /></button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
