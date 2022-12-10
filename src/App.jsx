import "./App.css";
import CharInfo from "./components/CharInfo";
import KeyMoves from "./components/KeyMoves";
import SandW from "./components/SandW";
import Navbar from "./components/Navbar";
import TopMoves from "./components/TopMoves";
import FrameDataTable from "./components/FrameDataTable";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <CharInfo />
      <SandW />
      <TopMoves />
      <KeyMoves />
      <FrameDataTable />
    </div>
  );
}

export default App;
