import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Service from "./pages/Services";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/services" element={ <Service/> } />
        <Route path="/*" element={ <NoPage/> } />
       </Routes>
      </Router>
    </>
  );
}

export default App;
