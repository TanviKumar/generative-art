import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import Card from "../Card/Card";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Axios from "axios";
export default function DashBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("./data.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  console.log(data);
  return (
    <div className="dashboard">
      <h1 className="title">Generative Art for All</h1>
      <Container style={{ margin: "5% auto" }}>
        <Grid container spacing={2}>
          {data.map((content) => {
            return (
              <Grid item xl={4} l={4} xs={12} sm>
                <Container style={{ margin: "40px 0" }}>
                  <Card
                    name={content.name}
                    desc={content.desc}
                    image={content.image}
                    linkUrl={content.linkUrl}
                    codeUrl={content.codeUrl}
                    author={content.author}
                  ></Card>
                </Container>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
