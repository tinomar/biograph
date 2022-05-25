import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieRequest, addFavorite } from '../actionCreators/movies';
import { RootState } from '../reducers';
import { Box, Card, CardMedia, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log(movie);
  return (
    <div className="MovieDetails">
      <Container maxWidth="md" sx={{ pt: 2, pb: 5 }}>
        <Typography variant="h4" component="h1">{movie?.Title}
          {!isInFavorites && <IconButton
            color="secondary"
            aria-label="add to favorites"
            title="Add to favorites"
            onClick={() => addToFavorites(movie)}>
            <StarIcon />
          </IconButton>}
        </Typography>
        <Typography component="p">{movie?.Plot}</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
            <Tab label="Movie Details" {...a11yProps(0)} />
            <Tab label="Poster" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={movie?.Year}
                    secondary="Year"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={movie?.Rated}
                    secondary="Rated"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={movie?.Released}
                    secondary="Released"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={movie?.Runtime}
                    secondary="Runtime"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={movie?.Genre}
                    secondary="Genre"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={movie?.Director}
                    secondary="Director"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={movie?.Writer}
                    secondary="Writer"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={movie?.Actors}
                    secondary="Actors"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image={movie?.Poster}
              alt={`${movie?.Title} movie poster`}
            />
          </Card>
        </TabPanel>
      </Container>
    </div >
  );
}

export default MovieDetails;