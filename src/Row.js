import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';
import YouTube from 'react-youtube';
/* import movieTrailer from 'movie-trailer'; */


const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]) 
    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            /* console.log(request) */
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl]);

/*     console.log(movies) */

const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=57e6f5efdc3c70fc78a1a07116fc7c4f`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };


    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {/*several row__poster */}
                {movies.map(movie => (
                    <img key={movie.id} onClick={() => handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            {/* container > posters */}
        </div>
    )
}

export default Row;