import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import Certificates from "./components/Certificates";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Profile />
      <Projects />
      <About />
      <Stack />
      <Certificates />
      <Contact />
    </React.Fragment>
  );
}

export default App;
