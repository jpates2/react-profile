import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Projects from "./components/Projects";
import Profile from "./components/Profile";

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
