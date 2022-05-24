import React from 'react';
import {
  Link as RouterLink,
  Outlet,
} from 'react-router-dom';
import { AppBar, Button, Toolbar, CssBaseline, Typography } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';

function Header() {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" component="p" color="textSecondary">
          Biograph
        </Typography>
        <div style={{ marginRight: "2rem" }}>
          <Button
            color="secondary"
            variant="text"
            component={RouterLink}
            to="/"
          >
            <HomeIcon />
            Introduction
          </Button>
          <Button
            color="secondary"
            variant="text"
            component={RouterLink}
            to="/movies"
          >
            <LocalMoviesIcon />
            Movies
          </Button>
          <Button
            color="secondary"
            variant="text"
            component={RouterLink}
            to="/movies/favorites"
          >
            <FavoriteIcon />
            Favorites
          </Button>
        </div>
      </Toolbar>
      <Outlet />
    </AppBar>
  );
}

export default Header;
