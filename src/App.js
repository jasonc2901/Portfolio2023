import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import '../src/styles/app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faCaretDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Main from "./pages/Main";

// make font awesome available globally
library.add(faBars, faTimes, faCaretDown, faArrowDown);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
