import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container>
          <Grid item>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                Seasons
              </Typography>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
