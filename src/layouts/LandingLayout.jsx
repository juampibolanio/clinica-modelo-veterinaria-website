import NavBar from '../components/NavBar'
import { Box, Container } from '@mui/material'
import Footer from '../components/Footer'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

function LandingLayout({ children }) {

  const navLinks = [
    { title: "Inicio", path: "/", icon: <HomeOutlinedIcon /> },
    { title: "Servicios", path: "/#servicios", icon: <PetsOutlinedIcon /> },
    { title: "Nosotros", path: "/#nosotros", icon: <Groups2OutlinedIcon /> },
    { title: "Contacto", path: "/#contacto", icon: <CallOutlinedIcon /> },
    { title: "Blog", path: "/blog", icon: <MenuBookOutlinedIcon /> },
  ]

  return (
    <>
      <NavBar navLinks={navLinks} />
      <Container maxWidth="lg">
        <Box component="main" sx={{ py: 4 }}>
          {children}
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default LandingLayout