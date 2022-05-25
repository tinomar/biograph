import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../actionCreators/movies';
import { RootState } from '../reducers';
import { Box, IconButton, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

interface MovieCardProps {
  posterUrl: string;
  title: string;
  index: number;
  onClick(): void;
  onDelete(): void;
}

function MovieCard(props: MovieCardProps) {
  const { posterUrl, title, index, onClick, onDelete } = props;
  return (
    <Card variant="outlined" sx={{ maxWidth: 135 }} key={`movie-card-${index}`}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={posterUrl}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" onClick={() => onClick()}><AutoStoriesIcon /></IconButton >
        <IconButton size="small" onClick={() => onDelete()}><DeleteIcon /></IconButton >
      </CardActions>
    </Card>
  );
}

function MovieFavorites() {
  // Use React Redux hooks to access movies store and trigger actions
  const { favorites } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ minHeight: 600 }}>
      <Box sx={{ my: 4, overflow: 'scroll' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Favorite Movies
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {favorites.length ? favorites.map((favorite, index) => (
          <Grid item md={3}>
            <MovieCard
              title={favorite.Title}
              posterUrl={favorite.Poster}
              index={index}
              onClick={() => navigate(`/movies/${favorite.imdbID}`)}
              onDelete={() => dispatch(removeFavorite(index))}
            />
          </Grid>)) :
          <Typography variant="body2" color="text.secondary">
            Nothing to show
          </Typography>}
      </Grid>
    </Container>
  );
}

export default MovieFavorites;