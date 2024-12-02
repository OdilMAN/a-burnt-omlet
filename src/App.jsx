import "./App.css";
import NavBar from "./Components/NavBar.jsx";

function App() {
  return (
    <div>
      <NavBar />
      {/* Row 2 - "About Me" */}
      <div className="row">
        {/* column 4 */}
        <div className="col">
          <p className="Lato">About Me:</p>
        </div>
      </div>
    </div>
  );
}

export default App;
