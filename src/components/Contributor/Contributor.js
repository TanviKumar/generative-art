import React from 'react';
import './Contributor.css'
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Contributor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Container fixed>

    <h1>Contributor Page</h1>
      <Grid container spacing={3}>
        
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>
              <div className="circle">
              
                  <img src="https://images.unsplash.com/photo-1608652763693-376f0ce46283?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" altt=""/>
              </div>
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>md=3</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>md=3</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}


