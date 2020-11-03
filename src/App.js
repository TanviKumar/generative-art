import "./App.css";
import DashBoard from "./components/DashBoard/DashBoard";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
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
      <div className="App">
        <Switch>
          <Route path="/art">
            <ArtDisplay></ArtDisplay>
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
