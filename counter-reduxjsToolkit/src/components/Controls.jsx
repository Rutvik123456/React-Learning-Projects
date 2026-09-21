import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counterSlice";
import { privacySliceAction } from "../store/privacySlice";


const Control = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleincrement = () => {
    dispatch(counterAction.increment());
  };
  const handledecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handleAdd = () => {
    dispatch(counterAction.add(Number(inputElement.current.value)));
    inputElement.current.value = "";
  };

  const handleSubstract = () => {
    dispatch(counterAction.substract(Number(inputElement.current.value)));
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacySliceAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleincrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handledecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-box">
        <input type="text" placeholder="custom value" ref={inputElement} />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          ADD
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSubstract}
        >
          SUBSTRACT
        </button>
      </div>
    </>
  );
};

export default Control;
