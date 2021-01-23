import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ButtonComponent from "./Components/buttoncomponent";
import PracticeSet from "./Components/practiceSet";
export default function App() {
  let [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="App">
      <Router>
        <Navbar setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
        <Switch>
          <Route exact path="/" component={ButtonComponent} />
          <Route
            exact
            path="/set:id"
            render={(props) => (
              <PracticeSet
                {...props}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            )}
          />
          {/* <Route exact path="/set1" component={} /> */}
        </Switch>
      </Router>
      {/* <Timer ringBell={handleClick}/> */}
    </div>
  );
}
