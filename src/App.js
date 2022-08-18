import "./styles.css";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React JSX</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
