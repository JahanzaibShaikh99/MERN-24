import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  var num = 0;
  return (
    <>
      <div className="inputBox">
        <input
          style={{
            width: "400px",
            height: "50px",
            fontSize: "2rem",
          }}
          type="text"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
      </div>

      <button
        style={{
          width: "100px",
          height: "2rem",
        }}
        onClick={() => {
          setList([...list, name]);
          setName(" ");
        }}
      >
        Submit
      </button>
      <div
        style={{
          fontSize: "30px",
        }}
      >
        {list.map((listItem) => {
          num++;
          return <div>{num + " " + listItem}</div>;
        })}
      </div>
    </>
  );
}

export default App;
