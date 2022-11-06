import * as React from 'react';
import {Box} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvSeriesIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
// import { ClassNames } from '@emotion/react';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate= useNavigate();

  React.useEffect(() => {
    if(value===0) navigate("/");
    else if(value===1) navigate("/movies");
    else if(value===2) navigate("/series");
    else if(value===3) navigate("/search");
  }, [value, navigate])
  

  return (
    <Box sx={{width:"100%",position:"fixed", bottom:0 ,backgroundColor:"black",zIndex:100,}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}        
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Tv Series" icon={<TvSeriesIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}