import "./App.css";
import Navbar from "./components/Sidebar/Navbar";
import DashBoard from "./components/DashBoard/DashBoard";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import About from "./components/About/About";
import Contributor from "./components/Contributor/Contributor";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <Router>
        <Navbar/>
        <div className="App">

        <Switch>

          <Route path="/art" component={ArtDisplay}/>
          <Route path="/about" component={About}/>
          <Route path="/contributor" component={Contributor}/>
          <Route path="/" component={DashBoard}/>

        </Switch>
        </div>

    </Router>
  );
}

export default App;
