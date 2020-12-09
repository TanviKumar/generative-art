import React,{useState, useEffect} from "react";
import "./DashBoard.css";
import { Link } from "react-router-dom";
import beyond_binary from "../../static/images/beyond_binary.png";
import border_radius from "../../static/images/border_radius.png";
import card from "../../static/images/card.png";
import cross from "../../static/images/cross.png";
import Card from "../Card/Card";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Axios from "axios";
export default function DashBoard() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    Axios.get("./data.json").
    then((res)=>{
      setData(res.data);
    })
    .catch(err=>{});
  },[]);
  console.log(data);
  return (
    <div className="dashboard">
      <h1 className="title">Generative Art for All</h1>
      <Container style={{ margin: "5% auto" }}>
        <Grid container spacing={0}>
          <Grid item xl={4} l={4} xs={12} sm>
            <Container style={{ margin: "20px auto" }}>
              <Card
                name="Beyond Binary"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet?"
                image={beyond_binary}
                linkUrl="/art/beyond_binary"
                codeUrl="https://github.com/rt1301/generative-art/blob/redux_implementation/assets/beyond_binary/sketch.js"
              ></Card>
            </Container>
          </Grid>
          <Grid item xl={4} l={4} xs={12} sm>
            <Container style={{ margin: "20px auto" }}>
              <Card
                name="Border Radius"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet?"
                image={border_radius}
                linkUrl="/art/border_radius"
                codeUrl="https://github.com/rt1301/generative-art/blob/redux_implementation/assets/border_radius/sketch.js"
              ></Card>
            </Container>
          </Grid>
          <Grid item xl={4} l={4} xs={12} sm>
            <Container style={{ margin: "20px auto" }}>
              <Card
                name="Card"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet?"
                image={card}
                linkUrl="/art/card"
                codeUrl="https://github.com/rt1301/generative-art/blob/redux_implementation/assets/card/sketch.js"
              ></Card>
            </Container>
          </Grid>
          <Grid item xl={4} l={4} xs={12} sm>
            <Container style={{ margin: "20px auto" }}>
              <Card
                name="Cross"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, amet?"
                image={cross}
                linkUrl="/art/cross"
                codeUrl="https://github.com/rt1301/generative-art/blob/redux_implementation/assets/cross/sketch.js"
              ></Card>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
