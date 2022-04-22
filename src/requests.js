const API_KEY = "57e6f5efdc3c70fc78a1a07116fc7c4f";



const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=99`,
  }
  export default requests;


/*   const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}$with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
  } */

  // https://api.themoviedb.org/3/movie/550?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f


/*   <Row title="NETFLIX ORIGINALS" fetchUrl={'https://api.themoviedb.org/3/trending/all/week?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&language=en-US'}/>
  <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/tv?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f$with_networks=213'}/>
  <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/movie/top_rated?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&language=en-US'}/>
  <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=28'}/>
  <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=35'}/>
  <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=27'}/>
  <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=10749'}/>
  <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f&with_genre=99'}/> */