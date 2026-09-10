import Todoitem from "./Todoitem";

function Mainitems({ datareact }) {
  return datareact.map((item) => (
    <Todoitem task={item.task} date={item.date} />
  ));
}

export default Mainitems;
