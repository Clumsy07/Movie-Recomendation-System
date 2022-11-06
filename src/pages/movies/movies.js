import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import SingleContent from '../../components/SingleContent/SingleContent';
import useGenres from '../../hooks/useGenre';
import "./movies.css"





const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const genreforURL = useGenres(selectedGenres)

  const fetchMovies= async()=>{
  const {data}= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f0cc2c4e8391f15bec05038202051056&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
  setContent(data.results);
  // console.log("page=",page);
  // console.log(data.results)
  setNumOfPages(data.total_pages);
}
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL])
  

  return (
    <div>
      <span className='pageTitle'>movies</span>
      <Genres 
        type="movie"
        genres={genres}
        selectedGenres={selectedGenres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
        page={page}
      />
      <div className='movies'>
      {
          content && content.map( (c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            media_type="movies"
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            vote_average ={c.vote_average}
          />
          ))
        }
      </div>
      {
        numOfPages>1 && (<CustomPagination page={page} setPage={setPage} numOfPages={numOfPages} />)
      }
    </div>
  )
}

export default Movies