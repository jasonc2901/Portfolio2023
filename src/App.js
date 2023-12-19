import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import '../src/styles/app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// make font awesome available globally
library.add(faBars, faTimes, faCaretDown);

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
