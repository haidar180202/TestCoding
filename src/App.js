import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";

function App() {
  return (
  
    <>
    <Router> 
      <Header/>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/Booking" element={<Booking/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
