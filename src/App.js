import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const newSet = new Set([]);
  const [newArr, setNewArr] = useState([])
  const allIcons = ["FaAtom", "FaAvianex", "FaArchway", "FaAngry", "FaBong", "FaCandyCane"]

  useEffect(() => {
    function mainFunc() {
      while (true) {
        newSet.add(0)
        if(newSet.size === 10) 
          break
      }
    }
    mainFunc()
    setNewArr(Array.from(newSet))
  }, [])


  return (
    <div style={{height: "100vh", backgroundColor: "black"}}>
      <div className="flex-container">
        <div>{newArr[0]}</div>
        <div>1</div>
        <div>1</div>
      </div>
      <div className="flex-container">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <div className="flex-container row">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
}

export default App;
