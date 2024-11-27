import styles from './App.module.css'
import Display from './components/Display';
import Btn from './components/Buttons';
import { useState } from 'react';

function App() {

  const [calVal , setcalVal] = useState("");

  const obBtnClk = (clkBtn) => {
    if (clkBtn === "C") {
      setcalVal('')
    }
    else if (clkBtn === "=") {
      const result = eval(calVal);
      setcalVal(result)
    }
    else{
      const newValue = calVal + clkBtn;
      setcalVal(newValue);
      console.log(calVal);
    }
  }

  let btnElements = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "9", "0", "DEL", "="];

  return (
    <>
      <div className={styles.calculator}>
        <Display displayVal={calVal} />
        <Btn onButtonClick={obBtnClk} texts={btnElements} />
      </div>
    </>
  );
}

export default App;
