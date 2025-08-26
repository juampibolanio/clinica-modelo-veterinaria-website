import React from 'react'
import NavBar from '../components/NavBar'
import { Container } from '@mui/material'
import Footer from '../components/Footer'

function LandingLayout({ children }) {
  return (
    <>
        <NavBar />
        <Container maxWidth="lg" sx={{ mt: 4}}>
            { children }
        </Container>
        <Footer />
    </>
  )
}

export default LandingLayout