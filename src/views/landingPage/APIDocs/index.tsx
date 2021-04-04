import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

// constants
import { sampleResponse } from "../../../utils/APIDocs/constants";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // minWidth: 375,
    width: "100%",
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
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  APIDocs: {
    marginBottom: theme.spacing(4),
  },
}));

const APIDocs = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    // <Container component="main">
    <div className={classes.paper}>
      <Typography component="h1" variant="h5" className={classes.APIDocs}>
        API Docs
      </Typography>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Type - POST
          </Typography>
          <Typography variant="h5" component="h2">
            Endpoint- {"https://www.cudovito.com/auth/register/:email"}
          </Typography>
          <Typography variant="body2" component="p">
            Response:
            <br />
            {sampleResponse}
          </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
      </Card>
    </div>
    // </Container>
  );
};

export default APIDocs;
