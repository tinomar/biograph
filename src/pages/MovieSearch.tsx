import React, { useState } from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { searchMovieRequest } from '../actionCreators/movies';
import { MoviesAction } from "../actionTypes/movies";

interface Props {
  movies: any[],
  onSearch(term: string): void;
}

const columns: GridColDef[] = [
  { field: 'imdbID', headerName: 'IMDB ID', width: 120 },
  { field: 'Title', headerName: 'Title', width: 600 },
  { field: 'Type', headerName: 'Type' },
  {
    field: 'Year',
    headerName: 'Year',
    type: 'number',
  },
];

function MovieSearch(props: Props) {
  const [inputText, setInputText] = useState("");
  const { onSearch, movies } = props;

  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <Box sx={{
      '& > :not(style)': { m: 1 }, height: 550,
      backgroundColor: 'primary.dark',
    }}>
      <TextField
        label="Search a movie"
        onChange={inputHandler}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={() => { onSearch(inputText) }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <div style={{ height: 400, width: '98.5%' }}>
        <DataGrid
          sx={{ backgroundColor: 'secondary.light' }}
          rows={movies}
          columns={columns}
          getRowId={(row) => row.imdbID}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Box>
  );
}

function mapStateToProps(state: { movies: { movies: any[] } }) {
  return { movies: state.movies.movies };
}

const mapDispatchToProps = (dispatch: Dispatch<MoviesAction>) => ({
  onSearch: (term: string) => {
    dispatch(searchMovieRequest(term));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);