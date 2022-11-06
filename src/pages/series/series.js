import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import SingleContent from '../../components/SingleContent/SingleContent';
import useGenres from '../../hooks/useGenre';
import "./series.css"

const Series = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const genreforURL = useGenres(selectedGenres)

  const fetchSeries= async()=>{
  const {data}= await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=f0cc2c4e8391f15bec05038202051056&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
  setContent(data.results);
  // console.log("page=",page);
  // console.log(data.results)
  setNumOfPages(data.total_pages);
}
  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreforURL])

  return (
    <div>
      <span className='pageTitle'>Tv Series</span>
      <Genres 
        type="tv"
        genres={genres}
        selectedGenres={selectedGenres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
        page={page}
      />

      <div className='series'>
      {
          content && content.map( (c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            media_type="tv"
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

export default Series