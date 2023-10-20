import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Profile />
      <Projects />
      <About />
    </React.Fragment>
  );
}

export default App;
