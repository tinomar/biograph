import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Container, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { searchMovieRequest } from '../actionCreators/movies';
import { MoviesAction } from "../actionTypes/movies";
import { RootState } from '../reducers';

interface Props {
  movies: any[],
  isLoading: boolean,
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
  const navigate = useNavigate();
  const { onSearch, movies, isLoading } = props;

  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <Container sx={{ height: 680 }}>
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
      <div style={{ height: 526, width: '98.5%', marginTop: 5 }}>
        <DataGrid
          sx={{
            backgroundColor: 'secondary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
              cursor: 'pointer'
            },
          }}
          loading={isLoading}
          rows={movies}
          columns={columns}
          getRowId={(row) => row.imdbID}
          disableSelectionOnClick={true}
          pageSize={8}
          rowsPerPageOptions={[8]}
          onRowClick={(params: GridRowParams) => navigate(`/movies/${params.id}`)}
        />
      </div>
    </Container>
  );
}

function mapStateToProps(state: RootState) {
  return { movies: state.movies.items, isLoading: state.isLoading.SEARCH_MOVIES };
}

const mapDispatchToProps = (dispatch: Dispatch<MoviesAction>) => ({
  onSearch: (term: string) => {
    dispatch(searchMovieRequest(term));
  },
});

// Use React Redux connect function to access movies store and trigger actions
export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);