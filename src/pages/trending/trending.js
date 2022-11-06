
// import { Pages } from '@mui/icons-material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import "./trending.css"




const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] =useState([]);

  const fetchTrending= async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=f0cc2c4e8391f15bec05038202051056&page=${page}`)
    // console.log('page=',page);
    setContent(data.results);

   }

   useEffect(()=>{
    fetchTrending();
    // eslint-disable-next-line
   },[page]);

  return (
    <div>
      <span className='pageTitle'>trending</span>
      <div className='trending'>
        {
          content && content.map( (c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            media_type={c.media_type}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            vote_average ={c.vote_average}
          />
          ))
        }
      </div>
      <CustomPagination  setPage={setPage} />
    </div>
  )
}

export default Trending