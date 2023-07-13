import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
