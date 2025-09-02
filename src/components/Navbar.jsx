import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { scrollToId } from "../utils/Home/scrollToId";
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
  const navigate = useNavigate();

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close drawer
  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);

  // click navegation
  const handleNavClick = (path, e) => {
    const targetId =
      (path === "/servicios" && "servicios") ||
      (path === "/equipo" && "equipo") ||
      (path === "/contacto" && "contacto") ||
      (path === "/" && "inicio");

    if (location.pathname === path) {
      if (targetId) {
        e?.preventDefault();
        scrollToId(targetId, 80, "smooth");
      }
    } else {
      navigate(path);
    }
  };

  return (
    <AppBar position="sticky" sx={AppBarSx(scrolled, theme)} elevation={scrolled ? 4 : 0}>
      <Container maxWidth="xl">
        <Toolbar sx={ToolBarSx} disableGutters>

          {/* Brand */}
          <Box sx={BrandContainerSx}>
            <Box sx={LogoContainerSx(theme)}>
              <Box component="img" src={icon} alt="Clínica Modelo Veterinaria Logo" sx={LogoSx} />
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

          {/* Desktop Links */}
          <Box sx={DesktopLinksContainerSx}>
            {navLinks.map((link, index) => (
              <Button
                key={link.title}
                startIcon={link.icon}
                disableElevation
                disableRipple
                sx={{
                  ...NavButtonSx(theme),
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={(e) => handleNavClick(link.path, e)}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          {/* Mobile menu */}
          <IconButton
            size="large"
            onClick={handleDrawerToggle}
            sx={MobileBurguerMenuSx(theme)}
            aria-label="toggle navigation menu"
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
            PaperProps={{ sx: DrawerPaperSx(theme) }}
            ModalProps={{
              BackdropProps: {
                sx: {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  backdropFilter: "blur(4px)",
                },
              },
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
