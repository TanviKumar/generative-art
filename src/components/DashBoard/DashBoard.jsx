import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import Card from "../Card/Card";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import FilterTags from "../FilterTags/FilterTags";
import Axios from "axios";
export default function DashBoard() {
  const [data, setData] = useState([]);
  const [filterTag, setFilterTag] = useState("");
  useEffect(() => {
    Axios.get("./data.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  const index = {
    0: "P5.js",
    1: "Visual Art",
    2: "Grid Based",
    3: "Animation",
    4: "3D",
    5: "Architecture",
    6: "Procedural Generation",
    7: "Noise",
    8: "L-Systems",
  };
  return (
    <div className="dashboard">
      <h1 className="title">Generative Art for All</h1>
      <FilterTags setFilterTag={setFilterTag} index={index}></FilterTags>
      <Container style={{ margin: "5% auto", width: "100%" }}>
        <Grid container spacing={1}>
          {data.map((content) => {
            const flag = content.tags.find((el) => {
              return el === filterTag;
            });
            if (!filterTag) {
              return (
                <Grid item xl={4} l={4} xs={12} sm>
                  <Container
                    style={{
                      marginTop: "40px",
                      marginBottom: "40px",
                      width: "max-content",
                    }}
                  >
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
            } else if (flag !== undefined) {
              return (
                <Grid item xl={4} l={4} xs={12} sm>
                  <Container
                    style={{
                      marginTop: "40px",
                      marginBottom: "40px",
                      width: "max-content",
                    }}
                  >
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
            }
          })}
        </Grid>
      </Container>
    </div>
  );
}
