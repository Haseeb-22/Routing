import { Grid, Typography } from '@mui/material'
import React from 'react'

import '../App.css'
function Home() {

  return (
    <div className="App">
      <h1>This is Home Page</h1>
      <Grid container sx={{padding:"40px"}} spacing={2}>
        <Grid item md={5} xl={5} lg={5}>
          <img src='https://www.w3schools.com/css/img_lights.jpg' />
        </Grid>
        <Grid item md={7} xl={7} lg={7}>
          <Typography variant='p' >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
      </Grid>
       <hr />
       <Grid container sx={{padding:"40px"}} spacing={2}>
        <Grid item md={7} xl={7} lg={7}>
          <Typography variant='p' >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item md={5} xl={5} lg={5}>
          <img src='https://www.w3schools.com/css/img_lights.jpg' />
        </Grid>
      </Grid>


     
    </div>

  )
}

export default Home
