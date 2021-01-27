import React from "react";
import "./FilterTags.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      margin: "auto",
    },
  },
  button: {
    width: "100%",
    height: "100%",
    margin: "2px 0",
  },
}));
export default function FilterTags(props) {
  const { index, setFilterTag } = props;
  const classes = useStyles();
  const filterTags = Object.values(index);
  return (
    <div className={classes.root}>
      <Grid style={{ width: "80%", margin: "auto" }} container spacing={1}>
        {filterTags.map((tag, key) => {
          return (
            <Grid key={key} item xl={4} l={4} xs={12} sm>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  setFilterTag(key);
                }}
              >
                {tag}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
