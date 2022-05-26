import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../actionCreators/movies';
import { IconButton, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: (isConfirmed: boolean) => void;
}

function DeleteConfirmationDialog(props: DeleteConfirmationDialogProps) {
  const { onClose, open, ...other } = props;

  const handleCancel = () => {
    onClose(false);
  };

  const handleOk = () => {
    onClose(true);
  };

  return (
    <Dialog sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}>
      <DialogTitle>Remove Favorite Movie</DialogTitle>
      <DialogContent>Do you really want to remove this movie from favorites?</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

interface MovieCardProps {
  posterUrl: string;
  title: string;
  index: number;
  onClick(): void;
  onDelete(index: number): void;
}

function MovieCard(props: MovieCardProps) {
  const { posterUrl, title, index, onClick, onDelete } = props;
  return (
    <Card variant="outlined" sx={{ maxWidth: 135 }}>
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
        <IconButton size="small" onClick={() => onDelete(index)}><DeleteIcon /></IconButton >
      </CardActions>
    </Card>
  );
}

function MovieFavorites() {
  // Use React Redux hooks to access movies store and trigger actions
  const favorites = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleDialogOpen = (favoriteIndex: number) => {
    setSelectedIndex(favoriteIndex);
  };

  const handleDialogClose = (isConfirmed: boolean) => {
    setSelectedIndex(-1);

    if (isConfirmed) {
      dispatch(removeFavorite(selectedIndex))
    }
  };

  return (
    <Container sx={{ height: 560 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Favorite Movies
      </Typography>

      <Grid container spacing={2} sx={{ overflow: 'scroll' }}>
        {favorites.length ? favorites.map((favorite: any, index: number) => (
          <Grid item md={2} key={`movie-card-${index}`}>
            <MovieCard
              title={favorite.Title}
              posterUrl={favorite.Poster}
              index={index}
              onClick={() => navigate(`/movies/${favorite.imdbID}`)}
              onDelete={handleDialogOpen}
            />
          </Grid>)) :
          <Typography variant="body2" color="text.secondary">
            Nothing to show
          </Typography>}
      </Grid>
      <DeleteConfirmationDialog
        open={selectedIndex > -1}
        onClose={handleDialogClose}
      />
    </Container>
  );
}

export default MovieFavorites;