import "./App.css";

function App() {

  let msg = "\n\t\t Searching ......";
  const showMessage = () => {
  alert(msg);
  };

  let mainMsg = "\n\t\t Hello This is React App ......";
  const mainMessage = () => {
  alert(mainMsg);
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <h1 onClick={mainMessage}>REACT</h1>
          <header>
            <div className="search">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit" onClick={showMessage}>Search</button>
            </div>
            <ul>
              <li>
                <a href="App">Home</a>
              </li>
              <li>
                <a href="App">About-US</a>
              </li>
              <li>
                <a href="App">Connection</a>
              </li>
              <li>
                <a href="App">Feedback</a>
              </li>
            </ul>
          </header>
        </div>
        <div className="container">
          <div className="text">
              <br /><br />
              <h1>Press the R E A C T </h1><br />
              <h2>Press the search Button </h2>
              <br /><br /><br /><br /><br />
              <h2>There are some Hover Effects and also used Action on Button (Search) using basic javascript</h2>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
