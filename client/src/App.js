import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import EditForm from "./Movies/editMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const getMovieList = (movieList) => {
    setMovieList(movieList);
  }

  useEffect(() => {
    console.log(movieList);
  },[getMovieList, movieList])

  return (
    <>
      <SavedList list={savedList} />
      {/* <Route exact path="/" component={MovieList} /> */}
      <Route
        exact
        path="/"
        render={props => {
          return <MovieList {...props} getList={getMovieList} />
        }} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        exact
        path="/update-movie/:id"
        render={props => {
          return <EditForm {...props} movies={movieList} />;
        }}
      />
    </>
  );
};

export default App;
