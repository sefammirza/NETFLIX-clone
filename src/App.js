import './App.css';
import Row from './Row';
import React from 'react';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>Hey Cleverr Programmer! Let's build Netflix Clone Front-end today</h1>
     <Row title="NETFLIX ORIGINALS" fetchUrl={'https://api.themoviedb.org/3/trending/all/week?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&language=en-US'}/>
     <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/tv?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f$with_networks=213'}/>
     <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/movie/top_rated?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&language=en-US'}/>
     <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=28'}/>
     <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=35'}/>
     <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=27'}/>
     <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=10749'}/>
     <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=99'}/>
    </div>
  );
}

export default App;
