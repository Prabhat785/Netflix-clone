import React from 'react';
import './App.css';
import Row from './Row'
import requests from "./requests";
import Banner from "./Banner";

import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Banner fetchUrl ={requests.fetchNetflixOriginals}/>
     
      <Row title = "Netflix Originals " fetchUrl ={requests.fetchNetflixOriginals} isLargerow = {true} cl ="lg"/>
      <Row title = " Trending Now" fetchUrl={requests.fetchTrending} cl =""/>
      <Row title = "Top Rated" fetchUrl ={requests.fetchTopRated} cl =""/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies} cl =""/>
      <Row title = "Comedy Movies" fetchUrl ={requests.fetchComedyMovies} cl =""/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies} cl =""/>
      <Row title = "Romance Movies" fetchUrl ={requests.fetchRomanceMovies} cl =""/>
      <Row title = "Documentries" fetchUrl={requests.fetchDocumentries} cl =""/>
    </div>
  );
}

export default App;
