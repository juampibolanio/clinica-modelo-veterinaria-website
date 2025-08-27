import { AppBar, Box, Button, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navButtonSx } from "../styles/navButtonSx";
import icon from "../assets/favicon.png";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";

export default function NavBar({ navLinks }) {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleNavClick = (path, e) => {
    if (path.startsWith("#")) {
      e?.preventDefault();
      const id = path.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({behavior: "smooth"})
      }
      setDrawerOpen(false);
    }
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "background.default", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "primary.main" }}>

          {/* Imagen y nombre de la veterinaria */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box component="img" src={icon} alt="Clínica Modelo Veterinaria Logo" sx={{ width: 140, height: 120 }}></Box>
            <Typography variant="h6" sx={{ fontFamily: "Nunito", color: "primary.main", fontSize: 20} }>
              Clínica Modelo <br />
              Veterinaria
            </Typography>
          </Box>

          {/* Links para versión desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, marginLeft: "auto", justifyContent: "center", flexGrow: 1 }}>
            {navLinks.map((link) =>
              link.path.startsWith("#") ? (
                <Button
                  key={link.title}
                  component="a"
                  href={link.path}
                  startIcon={link.icon}
                  disableElevation
                  disableRipple
                  sx={navButtonSx}
                  onClick={(e) => {handleNavClick(link.path, e)}}
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
                  sx={navButtonSx}
                  onClick={(e) => {handleNavClick(link.path, e)}}
                >
                  {link.title}
                </Button>
              )
            )}
          </Box>

          {/* Links para versión móvil */}
          <IconButton
            size="large"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <NavListDrawer
              navLinks={navLinks}
              handleDrawerOpen={handleNavClick}
            />
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  )
}
