import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Projects from "./Layout/Projects";
import Profile from "./Layout/Profile";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Profile />
      <Projects />
    </React.Fragment>
  );
}

export default App;
