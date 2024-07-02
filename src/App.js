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
import Users from "./pages/Users";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import Shirt from "./pages/Shirt";
import Jins from "./pages/Jins";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <> 
        <NavBar/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/services" element={ <Service/> } />
        <Route path="/products" element={<Products/>}>
         <Route index element={<Shirt/>}/>
          <Route path="shirt" element={<Shirt/>}/>
          <Route path="jins" element={<Jins/>}/>
        </Route>
        {/* <Route path="/products/shirt" element={<Shirt/>}/> */}
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/>
        <Route path="/*" element={ <NoPage/> } />
       </Routes>
    </>
  );
}

export default App;
