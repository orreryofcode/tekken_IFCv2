import "./App.css";
import CharInfo from "./components/CharInfo";
import KeyMoves from "./components/KeyMoves";
import SandW from "./components/SandW";
import Searchbar from "./components/Searchbar";
import TopMoves from "./components/TopMoves";

function App() {
  return (
    <div className='App'>
      <Searchbar />
      <CharInfo />
      <SandW />
      <TopMoves />
      <KeyMoves />
    </div>
  );
}

export default App;
