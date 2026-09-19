import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counterval = useSelector((store) => store.counter);

  return <p className="lead mb-4">counter value is {counterval}</p>;
};

export default DisplayCounter;
