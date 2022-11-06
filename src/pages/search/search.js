import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
const Search = () => {
  const [type, setType] = useState(0)
  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState()
  const [numOfPages, setNumOfPages] = useState()

  const darkTheme= createTheme({
    palette:{
        mode:"dark",
        primary:{
          main:"#fff"
        }
    },
})

  const fetchSearch=async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=f0cc2c4e8391f15bec05038202051056&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

    setContent(data.results)
    console.log("content ",content)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0,0)
    fetchSearch()
    // eslint-disable-next-line
  }, [type , page])
  

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display:"flex", margin:"15px 0"}}>
        <TextField
          style={{flex:1}}
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e)=> setSearchText(e.target.value)}
        />
        <Button variant= "contained" style={{marginLeft: 10}} onClick={fetchSearch}>
          <SearchIcon />
        </Button>
        </div>

        <Tabs 
          value={type} 
          indicatorColor="primary" 
          textColor="primary" 
          onChange={(event,newValue) => {
          setType(newValue)
          setPage(1)
          }}
          style={{paddingBottom:5}}
        >
          <Tab style ={{width:"50%"}} label="Search Movies" />
          <Tab style ={{width:"50%"}} label="Search  Tv Series" />
        </Tabs>
      </ThemeProvider>
      <div className='series'>
        {
          content && content.map( (c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            media_type={type ? "tv": "movie"}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            vote_average ={c.vote_average}
          />
          ))
        }
        {searchText &&
        content.length===0 &&
        (type ? <h2>No Series Found </h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages >1 && (
        <CustomPagination  setPage={setPage} />
      )}
    </div>
  )

}



export default Search