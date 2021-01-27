import { useEffect, useRef, useCallback } from "react";
import "./App.css";
import DashBoard from "./components/DashBoard/DashBoard";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import AboutUs from "./components/AboutUs/AboutUs";
import Contributors from "./components/Contributors/Contributors";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const containerRef = useRef(null);
  const data = {
    ease: 0.1,
    prev: 0,
    curr: 0,
    rounded: 0,
  };
  const smoothScroll = useCallback(() => {
    data.curr = window.scrollY;
    data.prev += (data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;
    containerRef.current.style.transform = `translateY(-${data.rounded}px)`;
    requestAnimationFrame(() => {
      smoothScroll();
    });
  }, [data]);
  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, []);
  return (
    <Router>
      <div className="App">
        <SideBar></SideBar>
        <div ref={containerRef} className="scroll">
          <Switch>
            <Route path="/art">
              <ArtDisplay></ArtDisplay>
            </Route>
            <Route path="/about-us">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contributors">
              <Contributors></Contributors>
            </Route>
            <Route path="/">
              <DashBoard></DashBoard>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
