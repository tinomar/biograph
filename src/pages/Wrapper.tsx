import React from 'react';
import {
  Link as RouterLink,
  Outlet,
} from 'react-router-dom';
import { AppBar, Container, Button, Toolbar, CssBaseline, Typography } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Wrapper() {

  return (
    <Container sx={{
      '& > :not(style)': { m: 1 },
      backgroundColor: 'primary.dark',
    }} >
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
              My Favorite Movies
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Typography sx={{pb:2}} variant="body2" color="text.secondary" align="center">
        {'Copyright © Martin Jánoš '}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}

export default Wrapper;
