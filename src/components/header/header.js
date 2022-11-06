import React from 'react'
import "./header.css";

function header() {
  return (
    <span onClick={()=>window.scroll(0,0)} className='header'>Filmy Chaska 📽</span>
    // <div>
    //     <div>
    //         <img src=''
    //     </div>
    //     <div className='header'> Filmy Chaska </div>
    // </div>
  )
}

export default header