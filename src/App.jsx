import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
  );
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
