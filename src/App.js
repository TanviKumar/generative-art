import "./App.css";
import DashBoard from "./components/DashBoard/DashBoard";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import AboutUs from "./components/AboutUs/AboutUs";
import Contributors from "./components/Contributors/Contributors";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <Router>
      <div className="App">
        <SideBar></SideBar>
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
    </Router>
  );
}

export default App;
