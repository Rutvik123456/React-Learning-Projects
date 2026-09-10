import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calval, setcalval] = useState("00");

  const onBtnclick = (button) => {
    if (button === "C") {
      setcalval("");
    } else if (button === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newDisplay = calval + button;
      setcalval(newDisplay);
    }
  };

  return (
    <div className={styles.Calculator}>
      <Display displayValue={calval}></Display>
      <ButtonsContainer handleOnClick={onBtnclick}></ButtonsContainer>
    </div>
  );
}

export default App;
