import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { createContext, useReducer } from "react";
import { reducer, initialState } from "./components/reducer";

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <div className="navigation-bar">
            <Navbar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="/about" element={<About />}></Route>

              <Route path="/contact" element={<Contact />}></Route>

              <Route path="/login" element={<Login />}></Route>

              <Route path="/signup" element={<Signup />}></Route>

              <Route path="/logout" element={<Logout />}></Route>

              <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
};

export default App;
