import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import NoPage from './pages/NoPage';
import MovieSearch from './pages/MovieSearch';
import MovieDetails from './pages/MovieDetails';
import MovieFavorites from './pages/MovieFavorites';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/movies" element={<Layout />}>
          <Route index element={<MovieSearch />} />
          <Route path="favorites" element={<MovieFavorites />} />
          <Route path=":movieId" element={<MovieDetails />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
