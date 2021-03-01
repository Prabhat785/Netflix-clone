import React, { Component } from 'react';
import axios from 'axios'
import './Row.css';
import './Banner.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Banner extends Component {
  state ={
      movies : []
  }
    componentDidMount (){
     
        axios.get(`https://api.themoviedb.org/3${this.props.fetchUrl}`)
       .then(response =>
        {
            console.log(this.props.fetchUrl);
            console.log(response.data.results);
            this.setState (
                {
                    movies: response.data.results[Math.floor(Math.random()*response.data.results.length)]
                }
            )
        })
   }
  // http://api.themoviedb.org/3/discover/movie?api_key=163a3a44da00520a9f12450581adec92&with_genres=99
  // http://api.themoviedb.org/3/discover/movie?api_key=163a3a44da00520a9f12450581adec92&with_geners=99
   render(){ 
      let m1 =this.state.movies;
   console.log(m1);
    return (
        <header
        className ="banner"
        style={{
         backgroundSize: "cover",
         backgroundImage : `url("https://image.tmdb.org/t/p/original/${m1.backdrop_path}")`,
         backgroundPosition : "center center"
        }
        }
        > 
         <div className ="banner_cnt" >
         <h1 className ="banner_title">{m1?.title || m1?.name || m1?.original_name}</h1>
          <div className="bannerbtns" >
          <Button variant="outline-secondary" style ={{color : "white"}}>Play</Button>{' '}
              <Button variant="outline-secondary" style ={{color : "white"}}>My List</Button>{' '}
          </div>
          <h1 className="banner_dis">{m1.overview}</h1>
         </div>
        </header>
    )
  }
}

export default Banner
