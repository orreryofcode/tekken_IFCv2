import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Fighters from "./pages/Fighters";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fighters' element={<Fighters />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
