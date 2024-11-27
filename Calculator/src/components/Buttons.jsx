import styles from "./../App.module.css";

const Btn = ({ texts, onButtonClick }) => {
  //   let btnElements = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "9", "0", "DEL", "="];

  return (
    <>
      <div className={styles.buttonContainer}>
        {texts.map((text) => {
          return (
            <button
              key={text}
              className={styles.button}
              onClick={() => onButtonClick(text)}
            >
              {text}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Btn;
