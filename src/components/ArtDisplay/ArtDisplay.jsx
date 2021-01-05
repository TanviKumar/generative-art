import React from "react";
import BeyondBinary from "./art-pieces/BeyondBinary/BeyondBinary";
import BorderRadius from "./art-pieces/BorderRadius/BorderRadius";
import Card from "./art-pieces/Card/Card";
import Cross from "./art-pieces/Cross/Cross";
import Cross2 from "./art-pieces/Cross2/Cross2";
import FlowerTree from "./art-pieces/FlowerTree/FlowerTree";
import DinnerLight from "./art-pieces/DinnerLight/DinnerLight";
import Fade from "./art-pieces/Fade/Fade";
import HazyPyramids from "./art-pieces/HazyPyramids/HazyPyramids";
import Pentaplex from "./art-pieces/Pentaplex/Pentaplex";
import PyramidGrid from "./art-pieces/PyramidGrid/PyramidGrid";
import RandomWalker from "./art-pieces/RandomWalker/RandomWalker";
import Sakura from "./art-pieces/Sakura/Sakura";
import SoftTenPrint from "./art-pieces/SoftTenPrint/SoftTenPrint";
import SquareCircle from "./art-pieces/SquareCircle/SquareCircle";
import Squiggles from "./art-pieces/Squiggles/Squiggles";
import TenPrint1 from "./art-pieces/TenPrint1/TenPrint1";
import TenPrintHex from "./art-pieces/TenPrintHex/TenPrintHex";
import ThickHexTenPrint from "./art-pieces/ThickHexTenPrint/ThickHexTenPrint";
import Tuls1 from "./art-pieces/Tuls1/Tuls1";
import Tuls2 from "./art-pieces/Tuls2/Tuls2";
import Tuls3 from "./art-pieces/Tuls3/Tuls3";
import Tuls4 from "./art-pieces/Tuls4/Tuls4";
import Tuls5 from "./art-pieces/Tuls5/Tuls5";
import VeraMolnar from "./art-pieces/VeraMolnar/VeraMolnar";
import Waves from "./art-pieces/Waves/Waves";
import {
  BrowserRouter as Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
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
      <Route path={`${match.url}/cross2`}>
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
      <Route path={`${match.url}/hazy_pyramids`}>
        <HazyPyramids></HazyPyramids>
      </Route>
      <Route path={`${match.url}/pentaplex`}>
        <Pentaplex></Pentaplex>
      </Route>
      <Route path={`${match.url}/pyramid_grid`}>
        <PyramidGrid></PyramidGrid>
      </Route>
      <Route path={`${match.url}/random_walker`}>
        <RandomWalker></RandomWalker>
      </Route>
      <Route path={`${match.url}/sakura`}>
        <Sakura></Sakura>
      </Route>
      <Route path={`${match.url}/soft_ten_print`}>
        <SoftTenPrint></SoftTenPrint>
      </Route>
      <Route path={`${match.url}/square_circle`}>
        <SquareCircle></SquareCircle>
      </Route>
      <Route path={`${match.url}/squiggles`}>
        <Squiggles></Squiggles>
      </Route>
      <Route path={`${match.url}/ten_print_1`}>
        <TenPrint1></TenPrint1>
      </Route>
      <Route path={`${match.url}/ten_print_hex`}>
        <TenPrintHex></TenPrintHex>
      </Route>
      <Route path={`${match.url}/thick_hex_ten_print`}>
        <ThickHexTenPrint></ThickHexTenPrint>
      </Route>
      <Route path={`${match.url}/tuls1`}>
        <Tuls1></Tuls1>
      </Route>
      <Route path={`${match.url}/tuls2`}>
        <Tuls2></Tuls2>
      </Route>
      <Route path={`${match.url}/tuls3`}>
        <Tuls3></Tuls3>
      </Route>
      <Route path={`${match.url}/tuls4`}>
        <Tuls4></Tuls4>
      </Route>
      <Route path={`${match.url}/tuls5`}>
        <Tuls5></Tuls5>
      </Route>
      <Route path={`${match.url}/vera_molnar`}>
        <VeraMolnar></VeraMolnar>
      </Route>
      <Route path={`${match.url}/waves`}>
        <Waves></Waves>
      </Route>
    </Switch>
  );
}
