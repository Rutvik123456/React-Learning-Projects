import { useContext } from "react";
import styles from "./WelacomeMesage.module.css";
import { Toitemcontex } from "../store/todo-item-store";

const WelacomeMesage = () => {
  const {todoItems} = useContext(Toitemcontex);
  return (
    todoItems.length === 0 && (
      <>
        <h1 className={styles.WelacomeMesage}>
          <span className={styles.Enjoy}>Enjoy</span> your{" "}
          <span className={styles.Shining}>Shining</span> day,{" "}
          <span className={styles.buddy}>buddy!!</span>
        </h1>
      </>
    )
  );
};

export default WelacomeMesage;
