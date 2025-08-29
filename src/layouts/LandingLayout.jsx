import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

function LandingLayout({ children }) {

  const navLinks = [
    { title: "Inicio", path: "/", icon: <HomeOutlinedIcon /> },
    { title: "Servicios", path: "#servicios", icon: <PetsOutlinedIcon /> },
    { title: "Nosotros", path: "#equipo", icon: <Groups2OutlinedIcon /> },
    { title: "Contacto", path: "#contacto", icon: <CallOutlinedIcon /> },
    { title: "Blog", path: "/blog", icon: <MenuBookOutlinedIcon /> },
  ]

  return (
    <>
      <NavBar navLinks={navLinks} />
      {children}
      <Footer />
    </>
  )
}

export default LandingLayout