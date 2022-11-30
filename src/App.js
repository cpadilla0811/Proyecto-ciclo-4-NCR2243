/* import logo from './logo.svg'; */
import './App.css';
import Login from './components/auth/Login';
import Servicios from './components/Servicios';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/books/Navbar';
import Principal from './components/Principal';
import Registro from './components/auth/Registro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/servicios" element={<Servicios/>}/>
          </Routes>       
      </BrowserRouter>     
    </div>
  );
}

export default App;
