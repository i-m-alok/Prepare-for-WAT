import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Timer from "./timer";
import bell_tannn from "./../../asset/bell_tannn.mpeg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function NavBar({ setCurrentIndex, currentIndex }) {
  let ringBell = () => {
    let snd = new Audio(bell_tannn);
    console.log(snd);
    snd.play();
  };
  return (
    <Navbar className="justify-content-between" bg="dark" variant="dark">
      <Navbar.Brand href="#home">W.A.T. Questions</Navbar.Brand>
      <Nav.Item>
        <Route path="/set:id">
          <Timer
            ringBell={ringBell}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
          />
        </Route>
      </Nav.Item>
    </Navbar>
  );
}

export default NavBar;
