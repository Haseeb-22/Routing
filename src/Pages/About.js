import React from 'react'
import '../App.css'
import { Grid, Typography } from '@mui/material'
function About() {
  return (

    <div className="App">
      <h1>About us</h1>
      <Grid container >
        <Grid items lg={12}>
          <Typography variant='p' align='center' sx={{ color: "crimson" }}>About us</Typography>
        </Grid>

        <Grid item lg={7} sx={{ marginTop: "30px" }}>
          <Typography variant='h6'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
        </Grid>
        <Grid item lg={5}>
          <img width={550} height={400} src='https://media.istockphoto.com/photos/about-key-picture-id479319781?s=612x612' />
        </Grid>
      </Grid>
    </div>
  )
}

export default About

