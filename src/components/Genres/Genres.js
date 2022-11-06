import { Chip } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({
    setSelectedGenres,
    genres,
    type,
    setPage,
    setGenres,
    selectedGenres,
}) => {

    const handleAdd=(genre)=>{
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g)=>g.id !== genre.id));
        setPage(1)
    }

    const handleRemove=(genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        )
        setGenres([... genres ,genre])
        setPage(1);
    }

const fetchGenres= async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=f0cc2c4e8391f15bec05038202051056&language=en-US`)
    setGenres(data.genres)
}
// console.log(genres)
// console.log(type)

useEffect(() => {
    fetchGenres();
// eslint-disable-next-line
  return () => {
    setGenres({});
  }
  // eslint-disable-next-line
}, [])


  return (
    // <Stack direction="row" spacing={1} flexWrap="wrap" >
    //     {selectedGenres && selectedGenres.map((genre)=>(
    //         <Chip 
    //         label={genre.name} 
    //         color="primary" 
    //         style={{ margin : 2 }} 
    //         size="small" 
    //         key={genre.id} 
    //         clickable 
    //         />
    //     ))}

    //     {genres && genres.map((genre)=>(
    //         <Chip 
    //         label={genre.name} 
    //         // color="primary" 
    //         style={{ margin : 2 }} 
    //         size="small" 
    //         key={genre.id} 
    //         clickable 
    //         onClick={() => handleAdd(genre)}  />
    //     ))}
    // </Stack>
    <div  style={{padding:"6px 0"}}>
        {selectedGenres && selectedGenres.map((genre)=>(
            <Chip 
            label={genre.name} 
            color="primary" 
            style={{ margin : 2 }} 
            size="small" 
            key={genre.id} 
            clickable 
            onDelete={() => handleRemove(genre)}
            />
        ))}

        {genres && genres.map((genre)=>(
            <Chip 
            label={genre.name} 
            // color="primary" 
            style={{ margin : 2 }} 
            size="small" 
            key={genre.id} 
            clickable 
            onClick={() => handleAdd(genre)}  />
        ))}
    </div>
  )
}

export default Genres