import React, { useEffect, useState } from "react";
import "./Contributors.css";
import Header from "../Header/Header";
import Axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
export default function Contributors() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("./contributor-data.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="contributor-section">
      <Header text="Contributors"></Header>
      <Grid container spacing={10} className="rows-contributor">
        {data.map((contributor) => {
          return (
            <Grid item xl={4} l={4} xs={12} sm>
              <Paper style={{ margin: "auto" }} className="people">
                {/* Retrieving data from People.js*/}
                <img src={contributor.image} alt="" className="pic" />
                <a href={contributor.githubUrl} className="contributor-name">
                  {contributor.name}
                </a>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
