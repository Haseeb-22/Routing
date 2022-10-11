import { AppBar, Button, IconButton, Tooltip, Typography } from '@mui/material'
import { Container, fontSize } from '@mui/system'
// import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Moreinfo from '../Pages/Moreinfo'
function Navbar() {
    return (
        <div>
            <Router>
                <AppBar sx={{ backgroundColor: "crimson", padding: "15px" }} component="nav">
                    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>

                        <Typography variant='h5' align='left' >
                            ROUTING 
                        </Typography>


                        <Link to="/" className='hi'>
                            <Typography >
                                <Tooltip title="Home" sx={{ padding: "0px" }}>
                                    <Button variant='text' color='inherit' sx={{ fontSize: "17px" }}>Home</Button>
                                    {/* <IconButton color='inherit' sx={{ padding: "0px", fontSize:"17px" }}>
                                Home
                            </IconButton> */}
                                </Tooltip>
                            </Typography>
                        </Link>


                        <Link to="services" className='hi'>
                            <Typography>
                                <Tooltip title="Services" sx={{ padding: "0px" }}>
                                    {/* <IconButton color='inherit' sx={{ padding: "0px", fontSize:"17px" }}>
                                Services
                            </IconButton> */}
                                    <Button variant='text' color='inherit' sx={{ fontSize: "17px" }}>Services</Button>
                                </Tooltip>
                            </Typography>
                        </Link>

                        <Link to="about" className='hi'>
                            <Typography>
                                <Tooltip title="About" sx={{ padding: "0px" }}>
                                    {/* <IconButton color='inherit' sx={{ padding: "0px", fontSize:"17px" }}>
                                About
                            </IconButton> */}
                                    <Button variant='text' color='inherit' sx={{ fontSize: "17px" }}>About</Button>

                                </Tooltip>
                            </Typography>
                        </Link>

                        <Link to="contact" className='hi'>
                            <Typography >
                                <Tooltip title="Contact" sx={{ padding: "0px" }}>
                                    {/* <IconButton color='inherit' sx={{ padding: "0px", fontSize: "17px" }}>
                                Contact
                                <HomeIcon fontSize='large' sx={{ padding: "0px" }} />
                            </IconButton> */}
                                    <Button variant='text' color='inherit' sx={{ fontSize: "17px" }}>Contact</Button>

                                </Tooltip>
                            </Typography>
                        </Link>

                        <Link to="moreinfo" className='hi'>
                            <Typography >
                                <Tooltip title="Contact" sx={{ padding: "0px" }}>
                                    {/* <IconButton color='inherit' sx={{ padding: "0px", fontSize: "17px" }}>
                                Contact
                                <HomeIcon fontSize='large' sx={{ padding: "0px" }} />
                            </IconButton> */}
                                    <Button variant='text' color='inherit' sx={{ fontSize: "17px" }}>Moreinfo</Button>

                                </Tooltip>
                            </Typography>
                        </Link>
                    </Container>
                </AppBar>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='services' element={<Services />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='about' element={<About />} />
                    <Route path='moreinfo' element={<Moreinfo/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default Navbar
