import { createTheme, Pagination, ThemeProvider } from '@mui/material'

import React from 'react'

const darkTheme= createTheme({
    palette:{
        mode:"dark",
    },
})

const CustomPagination = ({setPage, numOfPages=10}) => {
  const handlePageChange =(page) => {
    setPage={page};
    // window.scroll(0,0);
    // console.log("page",page)
  };
  
    return (
    <div
    style={{
        width:"100%",
        display: "flex",
        justifyContent: "center",
        marginTop:10,
    }}>
        <ThemeProvider theme={darkTheme}>
        <Pagination 
        count={numOfPages}
        onChange={(e, value)=>{ 
            setPage(value)
            // handlePageChange(value);
            window.scroll(0,0);
            }}
            color="primary"
            hideNextButton
            hidePrevButton
             />
        </ThemeProvider>
        {/* <Pagination count={numOfPages} onChange={(e)=> handlePageChange(e.target.textContent)}/> */}
        
    </div>
  )
}

export default CustomPagination;