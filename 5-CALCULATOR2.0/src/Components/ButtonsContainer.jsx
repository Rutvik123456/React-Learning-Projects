import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({handleOnClick}) => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((button) => (
        <button 
        key={button}
        className={styles.btns}
        onClick={()=>handleOnClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
