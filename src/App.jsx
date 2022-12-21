import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Fighter from "./pages/Fighter";
import Support from "./pages/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fighters'>
            <Route path=':id' element={<Fighter />} />
          </Route>

          <Route path='/support' element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
