import { useContext } from "react";
import Todoitem from "./Todoitem";
import { Toitemcontex } from "../store/todo-item-store";

function Mainitems() {
  const {todoItems} = useContext(Toitemcontex);
  return todoItems.map((item) => (
    <Todoitem
      key={item.task}
      task={item.task}
      date={item.date}
    />
  ));
}

export default Mainitems;
