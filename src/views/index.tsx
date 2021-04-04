// other pages component
import Register from "./landingPage/register/index";
import APIKeys from "./landingPage/APIKeys/index";
import Playground from "./landingPage/playground/index";
import APIDocs from "./landingPage/APIDocs/index";
import Feedback from "./landingPage/feedback/index";
import Support from "./landingPage/support/index";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function SignUp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Playground />
          <APIDocs />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Feedback />
            </Grid>
            <Grid item xs={6}>
              <Support />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Register />
          <APIKeys />
        </Grid>
      </Grid>
    </div>
  );
}
