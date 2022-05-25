import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieRequest, addFavorite } from '../actionCreators/movies';
import { RootState } from '../reducers';
import { Container, IconButton, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function MovieDetails() {
  const { movieId } = useParams();

  // Use React Redux hooks to access movies store and trigger actions
  const { displayedItem: movie, favorites } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  const isInFavorites: boolean = favorites.findIndex((item: any) => item.imdbID === movieId) >= 0;

  useEffect(() => {
    if (movieId) {
      dispatch(getMovieRequest(movieId));
    }
  });

  const addToFavorites = (item: any) => {
    dispatch(addFavorite(item));
  }

  return (
    <div className="MovieDetails">
      <Container maxWidth="md" sx={{ pt: 2, pb: 5, height: 600 }}>
        <Typography variant="h4" component="h1">{movie?.Title}
          {!isInFavorites && <IconButton
            color="secondary"
            aria-label="add to favorites"
            title="Add to favorites"
            onClick={() => addToFavorites(movie)}>
            <StarIcon />
          </IconButton>}
        </Typography>
        <Typography sx={{ pb: 3 }} color="primary.dark">Movie Details</Typography>
        {JSON.stringify(movie, null, 2)}
        Favorites
        {JSON.stringify(favorites, null, 2)}
      </Container>
    </div>
  );
}

export default MovieDetails;