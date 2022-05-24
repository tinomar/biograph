import React, { useState } from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { searchMovieRequest } from '../actionCreators/movies';
import { MoviesAction } from "../actionTypes/movies";

interface Props {
  onSearch(term: string): void;
}

function MovieSearch(props: Props) {
  const [inputText, setInputText] = useState("");
  const { onSearch } = props;

  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <Box sx={{
      '& > :not(style)': { m: 1 }, height: 500,
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
    </Box>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<MoviesAction>) => ({
  onSearch: (term: string) => {
    dispatch(searchMovieRequest(term));
  },
});

export default connect(null, mapDispatchToProps)(MovieSearch);