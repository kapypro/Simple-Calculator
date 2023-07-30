import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const handleButton = (e) => {
    setResult(result.concat(e.target.value));
  };
  const handleClear = () => {
    setResult("");
  };
  const handledeletelast = () => {
    setResult(result.slice(0, -1));
  };
  const handleCalculate = () => {
    try {
      const final = eval(result)
      setResult(final.toString());
    } catch {
      setResult("Invalid");
    }
  };
  return (
    <div className="calbody">
      <div className="screen">{result}</div>
      <div className="buttonbody">
        <button onClick={handleClear} className="span1">
          AC
        </button>
        <button value="Del" onClick={handledeletelast}>
          Del
        </button>
        <button value="/" onClick={handleButton}>
          /
        </button>
        <button value="1" onClick={handleButton}>
          1
        </button>
        <button value="2" onClick={handleButton}>
          2
        </button>
        <button value="3" onClick={handleButton}>
          3
        </button>
        <button value="+" onClick={handleButton}>
          +
        </button>
        <button value="4" onClick={handleButton}>
          4
        </button>
        <button value="5" onClick={handleButton}>
          5
        </button>
        <button value="6" onClick={handleButton}>
          6
        </button>
        <button value="-" onClick={handleButton}>
          -
        </button>
        <button value="7" onClick={handleButton}>
          7
        </button>
        <button value="8" onClick={handleButton}>
          8
        </button>
        <button value="9" onClick={handleButton}>
          9
        </button>
        <button value="*" onClick={handleButton}>
          *
        </button>
        <button value="." onClick={handleButton}>
          .
        </button>
        <button value="0" onClick={handleButton}>
          0
        </button>
        <button className="span1" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
