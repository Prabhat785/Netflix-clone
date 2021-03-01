import React, { Component } from 'react';
import axios from 'axios'
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
class Row extends Component {
  state ={
      movies : [],
      trailerUrl: ""
  }
  opts ={
    height:"390",
   width : "100%",
   playerVars: {
       autoplay :1,
   }
};

    componentDidMount (){
     
       
   }
   handleClick = (movie) =>{
    if(this.state.trailerUrl)
    {
        this.setState({trailerUrl:""})
    }
    else{
    let str ="";
    if(movie.name)   
     str=movie.name;
     else if(movie.title)
     str=movie.title; 
     console.log(str);
    movieTrailer(str)
    .then( (response) =>{
        const urlParams=new URLSearchParams(new URL(response).search)
          this.setState({trailerUrl:urlParams.get('v')})
    }
      )
    .catch((error)=>console.log(error))  
    }
   }

   
  // http://api.themoviedb.org/3/discover/movie?api_key=163a3a44da00520a9f12450581adec92&with_genres=99
  // http://api.themoviedb.org/3/discover/movie?api_key=163a3a44da00520a9f12450581adec92&with_geners=99
   render(){ 
    axios.get(`https://api.themoviedb.org/3${this.props.fetchUrl}`)
    .then(response =>
     {
         console.log(response);
         //console.log(this.props.fetchUrl);
         //console.log(response.data.results);
         this.setState (
             {
                 movies: response.data.results
             }
         )
     })
    
      let m1 =this.state.movies;
     // console.log(m1);
    // console.log(this.opts); 
     const mv = m1.map(movie =>{
        return <img key ={movie.id} onClick ={()=>this.handleClick(movie)} 
        className ={`row_poster${this.props.cl}`} src ={`https://image.tmdb.org/t/p/original/${this.props.isLargerow ? movie.poster_path : movie.backdrop_path }`} alt ={movie.name }/>
     })
   //console.log(m1);
    return (
        <div className ="row" style={{marginLeft : "20px"}}>
           <h4>{this.props.title}</h4> 
        
           <div className="row_posters">
               {mv}
           </div>
           <div style={{width : "100%"}}>
              {this.state.trailerUrl&& < Youtube videoId={this.state.trailerUrl} opts ={this.opts}/>}
           </div>
        </div>
    )
  }
}

export default Row
