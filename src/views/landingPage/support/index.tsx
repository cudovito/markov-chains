import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";

// constants
import { sampleResponse } from "../../../utils/APIDocs/constants";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 375,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  APIDocs: {
    marginBottom: theme.spacing(4),
  },
}));

const Support = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.APIDocs}>
          Contact Us
        </Typography>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Saurabh Waradkar
            </Typography>
            <Typography variant="body2" component="p">
              Gmail: waradkarsaurabh@gmail.com
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Rishabh Bhardwaj
            </Typography>
            <Typography variant="body2" component="p">
              Twitter- {"https://twitter.com/rishabhb932"}
            </Typography>
            <Typography variant="body2" component="p">
              Gmail: rishabhb932@gmail.com
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </div>
    </Container>
  );
};

export default Support;
