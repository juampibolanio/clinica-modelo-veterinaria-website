import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import icon from "../assets/favicon.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavListDrawer from "./NavListDrawer";
import { 
  AppBarSx, 
  ToolBarSx,
  LogoContainerSx,
  LogoSx, 
  TitleContainerSx,
  Title1Sx, 
  Title2Sx, 
  DesktopLinksContainerSx,
  NavButtonSx, 
  MobileBurguerMenuSx,
  DrawerPaperSx,
  BrandContainerSx
} from "../styles/NavBars/NavBarSx";

export default function NavBar({ navLinks }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);

  // Handler click for Scroll with Smooth
  const handleNavClick = (path, e) => {
    if (path.startsWith("#")) {
      e?.preventDefault();
      const id = path.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        const navHeight = 80;
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setDrawerOpen(false);
    }
  };

  return (
    <AppBar position="sticky" sx={AppBarSx(scrolled, theme)} elevation={scrolled ? 4 : 0}>
      <Container maxWidth="xl">
        <Toolbar sx={ToolBarSx} disableGutters>
          
          {/* Brand Section */}
          <Box sx={BrandContainerSx}>
            <Box sx={LogoContainerSx(theme)}>
              <Box 
                component="img" 
                src={icon} 
                alt="Clínica Modelo Veterinaria Logo" 
                sx={LogoSx} 
              />
            </Box>
            <Box sx={TitleContainerSx}>
              <Typography variant="h6" sx={Title1Sx(theme)}>
                Clínica Modelo
              </Typography>
              <Typography variant="caption" sx={Title2Sx(theme)}>
                Veterinaria
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={DesktopLinksContainerSx}>
            {navLinks.map((link, index) => {
              return link.path.startsWith("#") ? (
                <Button
                  key={link.title}
                  component="a"
                  href={link.path}
                  startIcon={link.icon}
                  disableElevation
                  disableRipple
                  sx={{
                    ...NavButtonSx(theme),
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={(e) => handleNavClick(link.path, e)}
                >
                  {link.title}
                </Button>
              ) : (
                <Button
                  key={link.title}
                  component={NavLink}
                  to={link.path}
                  startIcon={link.icon}
                  disableElevation
                  disableRipple
                  sx={{
                    ...NavButtonSx(theme),
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {link.title}
                </Button>
              );
            })}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton 
            size="large" 
            onClick={handleDrawerToggle} 
            sx={MobileBurguerMenuSx(theme)}
            aria-label="toggle navigation menu"
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
            PaperProps={{
              sx: DrawerPaperSx(theme),
            }}
            ModalProps={{
              BackdropProps: {
                sx: {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(4px)',
                }
              }
            }}
          >
            <NavListDrawer 
              navLinks={navLinks} 
              handleDrawerOpen={handleNavClick}
              onClose={handleDrawerClose}
            />
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}