import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Profile />
      <Projects />
      <About />
      <Contact />
    </React.Fragment>
  );
}

export default App;
