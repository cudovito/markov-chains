// // other pages component

// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "center",
//       // color: theme.palette.text.secondary,
//     },
//   })
// );

// export default function SignUp() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <Playground />
//
//           <Grid container spacing={3}>
//             <Grid item xs={6}>
//               <Feedback />
//             </Grid>
//             <Grid item xs={6}>
//               <Support />
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={6}>
//           <Register />
//           <APIKeys />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// importing other components
import APIDocs from "./landingPage/APIDocs/index";
import Register from "./landingPage/register/index";
import APIKeys from "./landingPage/APIKeys/index";
import Playground from "./landingPage/playground/index";

import Feedback from "./landingPage/feedback/index";
import Support from "./landingPage/support/index";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    alignItems: "center",
    justifyContent: "center",
  },
  topHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.topHeading}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Sign Up" {...a11yProps(0)} />
          <Tab label="Playground" {...a11yProps(1)} />
          <Tab label="API Docs" {...a11yProps(2)} />
          <Tab label="Contact Us" {...a11yProps(3)} />
          <Tab label="Feedback" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Register />
        <APIKeys />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Playground />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <APIDocs />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Support />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Feedback />
      </TabPanel>
    </div>
  );
}
