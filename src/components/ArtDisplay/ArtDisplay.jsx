import React from "react";
import BeyondBinary from "./art-pieces/BeyondBinary/BeyondBinary";
import BorderRadius from "./art-pieces/BorderRadius/BorderRadius";
import Card from "./art-pieces/Card/Card";
import Cross from "./art-pieces/Cross/Cross";
import Cross2 from "./art-pieces/Cross2/Cross2";
import {
  BrowserRouter as Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import FlowerTree from "./art-pieces/FlowerTree/FlowerTree";
import DinnerLight from './art-pieces/DinnerLight/DinnerLight';
import Fade from './art-pieces/Fade/Fade';
export default function ArtDisplay() {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/beyond_binary`}>
        <BeyondBinary />
      </Route>
      <Route path={`${match.url}/border_radius`}>
        <BorderRadius />
      </Route>
      <Route path={`${match.url}/card`}>
        <Card />
      </Route>
      <Route path={`${match.url}/cross`}>
        <Cross />
      </Route>
      <Route path={`${match.url}/cross_2`}>
        <Cross2></Cross2>
      </Route>
      <Route path={`${match.url}/cross_2`}>
        <Cross2></Cross2>
      </Route>
      <Route path={`${match.url}/dinner_light`}>
        <DinnerLight></DinnerLight>
      </Route>
      <Route path={`${match.url}/fade`}>
        <Fade></Fade>
      </Route>
      <Route path={`${match.url}/flower_tree`}>
       <FlowerTree></FlowerTree>
      </Route>
    </Switch>
  );
}
