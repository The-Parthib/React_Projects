import { useContext } from "react";
import styles from "./AppName.module.css";
import { TodoItemContext } from "../store/TodoItemContext";

const WelcomeMsg = () => {

  const { todoItems } = useContext(TodoItemContext);

  return (
    <>
      {todoItems.length === 0 && (
        <h2 className={styles.welMsg}>🤩 You Dont Have any Pending Works </h2>
      )}
    </>
  );
};

export default WelcomeMsg;
