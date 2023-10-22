import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Profile />
      <Projects />
      <About />
      <Stack />
      <Contact />
    </React.Fragment>
  );
}

export default App;
