import React from "react";
import { makeStyles, Grid, Paper, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header_link: {
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
    borderRadius: "25px",
    marginTop: theme.spacing(2),
  },
}));

const Greeting = () => {
  const classes = useStyles();

  return (
    <Grid container component="header" className={classes.root}>
      <Grid item xs={12} sm={4} md={7} component={Paper} elevation={0} square>
        <div className={classes.paper}>
          <Typography component="h2" variant="h5">
            Hello. My name is
          </Typography>
          <Typography component="h2" variant="h5">
            Aleksi Khlebnikov
          </Typography>
          <Typography component="h2" variant="h5">
            I'm a software engineer
          </Typography>

          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.header_link}
          >
            About
          </Link>
        </div>
      </Grid>
      <Grid item xs={false} sm={8} md={5} className={classes.image} />
    </Grid>
  );
};

export default Greeting;
