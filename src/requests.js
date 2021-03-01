const API_Key = "163a3a44da00520a9f12450581adec92";
const requests ={
    fetchTrending : `/trending/all/week?api_key=${API_Key}&language=en-us`,
    fetchNetflixOriginals :`/discover/tv?api_key=${API_Key}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_Key}&language=en-us`,
    fetchActionMovies : `/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_Key}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_Key}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_Key}&with_genres=10749`,
    fetchDocumentries : `/discover/movie?api_key=${API_Key}&with_genres=99`,
}
export default requests;