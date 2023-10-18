import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Projects from "./Layout/Projects";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Projects />
    </React.Fragment>
  );
}

export default App;
