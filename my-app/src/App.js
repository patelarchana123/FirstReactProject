import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
// import "./styles/APP.scss"
import "./styles/APP.scss"
import "./styles/Header.scss"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
