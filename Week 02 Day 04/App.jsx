/*
    Problem statement
    Add Button if press then number should be ++
    Maintain the history of every click
*/

import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNum] = useState(0);
  const [history, setHistory] = useState([]);

  return (

    <>
      <div className="container" style={{
        backgroundColor:'skyblue'
      }}>
        <button
          onClick={() => {
            setNum(number + 1);
            const currentTime = new Date();
            setHistory([...history, currentTime]);            
          }}
          style={{
            backgroundColor: "green",
            padding: "20px",
            color: "white",
            width: "100px",
            height: "100px",
            fontSize: "2em",
          }}
        >
          {" "}
          {number}
        </button>

        <div>
          <button
            style={{
              backgroundColor: "smokeywhite",
              color: "green",
              fontSize: 30,
              margin: 20,
            }}
            onClick={() => {
              setNum(0);
              setHistory([]);
            }}
          >
            {" "}
            Reset
          </button>
        </div>

        <div
          style={{
            margin: 10,
            fontSize: 30,
            display: "flex",
            // justifycontent: "center"
            flexDirection:'column',
            alignItems:'center'
          }}
        >
          {history.map((clickTime, index) =>(
            <div key ={index}>
              {index+1} {"Entry: "} {clickTime.toLocaleString()}
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export default App;
