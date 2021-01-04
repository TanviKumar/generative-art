import React from 'react'
import './Contributor.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {People} from './People';

export default function Contributor() {

  return (

    <section id="contributor">
    <Container fixed >
    <h1>Contributors</h1>
    <Grid container spacing={10} className="rows-contributor">
      {People.map((contributor) => {
            return (
              <Grid item xl={4} l={4} xs={12} sm>
                <Paper style={{ margin: "auto" }} className="people">
                  {/* Retrieving data from People.js*/}
                  <img src={contributor.pic} alt="" className="pic"/>
                  <a href={contributor.github} className="contributor-name">{contributor.name}</a>
                </Paper>
              </Grid>
                  );
      })}
    </Grid>
    </Container>
    </section>

  );

}
