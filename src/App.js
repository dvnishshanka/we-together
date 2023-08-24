import "./App.css";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav";
import About from "./pages/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isRegister, setIsRegister] = useState(true);
  const [currentPg, setCurrentPg] = useState("");

  const changeNavText = (state, page) => {
    setIsRegister(state);
    setCurrentPg(page);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Nav currentPg={currentPg} isRegister={isRegister}></Nav>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home changeNavText={changeNavText} />}
          />
          <Route
            path="/about"
            element={<About changeNavText={changeNavText} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
