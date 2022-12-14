import { Badge } from '@mui/material';
import React from 'react';
import {img_300 , unavailable} from "../../config/config";
// import ContentModal from '../ContentModal/contentModal';
import "./SingleContent.css";


const SingleContent = ({
    title,
    id,
    poster,
    media_type,
    date,
    vote_average
}) => {
  return (
    <div className='media'  >
        <Badge 
        badgeContent={vote_average} 
        color={vote_average>6?"primary":"secondary"} 
        />
        <img 
        className='poster' 
        src={poster ?`${img_300}/${poster}`: unavailable} 
        alt={title}
        />
        <b className='title'>{title}</b>
        <span className='subTitle'>
            {media_type==="tv"?"Tv Series":"Movie"}
            <span className='subTtile'>{date}</span>
        </span>
    </div>
    
  )
}

export default SingleContent