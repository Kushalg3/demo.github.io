import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='App'>
      <div className='navigation-bar'>
        <Navbar/>
      </div>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>

          <Route path="/about" element={<About/>}></Route>

          <Route path="/contact" element={<Contact/>}></Route>

          <Route path="/login" element={<Login/>}></Route>

          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
