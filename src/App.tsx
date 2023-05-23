import './App.css'
import Footer from './components/footer/index'
import Home from './components/home/index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Navbar/>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
