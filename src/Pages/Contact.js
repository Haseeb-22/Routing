import React from 'react'
import '../App.css'
import { Grid, Typography } from '@mui/material'
function Contact() {
  console.log("Helodjksnhkbjgdvnb");
  return (
    <div className="App">
      <h1>Contact us</h1>
      <Grid container >
        <Grid items lg={12}>
          <Typography variant='p' align='center' sx={{ color: "crimson" }}>Contact us</Typography>
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
          <img width={550} height={400} src='https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
        </Grid>
      </Grid>
    </div>
  )

}

export default Contact