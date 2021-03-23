import React from 'react'
import {
    makeStyles,
    AppBar, 
    Toolbar,
    Typography,
    Link
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
      flexWrap: "wrap"
  },
  menu_title: {
      flexGrow: 1,
      textTransform: 'uppercase',
  },
  link: {
      margin: theme.spacing(1, 1.5)
  }
}));

const MainMenu = () => {
    const classes = useStyles()

    return (
      <React.Fragment>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.menu_title}
            >
              Aleksi Khlebnikov
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                About
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Portfolio
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Contact
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
}

export default MainMenu