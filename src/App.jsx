import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
      <Contact />
      <Experience />
      <Footer />
      <Header />
      <Nav />
      <Portfolio />
    </>
  );
}

export default App;
