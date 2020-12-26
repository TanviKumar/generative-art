import React from 'react';
import './Contributor.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Contributor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    <Container fixed >
    <h1>Contributor Page</h1>

    {/* Row1 of the page*/}
      <Grid container spacing={7} className="rows-contributor">
        
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      
      </Grid>
      
      {/* Row2 of the page*/}


      <Grid container spacing={7} className="rows-contributor">
        
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>
          <img src="https://images.unsplash.com/photo-1608652763693-376f0ce46283?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" altt=""/>

          </Paper>
        </Grid>
      </Grid>






      </Container>
    </div>
  );
}


