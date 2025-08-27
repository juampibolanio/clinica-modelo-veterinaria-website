import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
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
        section.scrollIntoView({ behavior: "smooth" });
      }
      setDrawerOpen(false);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #5A9EF0 50%, #7027A0 100%)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}>
        {/* -------------------------------- Logo y nombre -------------------------------- */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="img" src={icon} alt="Clínica Modelo Veterinaria Logo" sx={{ width: 80, height: 70 }} />
          <Box>
            <Typography variant="h6" sx={{ fontFamily: "Nunito", fontWeight: 700 }}>Clínica Modelo</Typography>
            <Typography variant="body2" sx={{ fontFamily: "Nunito", opacity: 0.9 }}>Veterinaria</Typography>
          </Box>
        </Box>

        {/*-------------------------------- Links desktop --------------------------------*/}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: "auto" }}>
          {navLinks.map(link =>
            link.path.startsWith("#") ? (
              <Button
                key={link.title}
                component="a"
                href={link.path}
                startIcon={link.icon}
                disableElevation
                disableRipple
                sx={{ ...navButtonSx, color: "#fff" }}
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
                sx={{ ...navButtonSx, color: "#fff" }}
              >
                {link.title}
              </Button>
            )
          )}
        </Box>

        {/*-------------------------------- Versión móvil --------------------------------*/}
        <IconButton
          size="large"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: {
              background: "linear-gradient(180deg, #3781E3 0%, #7027A0 100%)",
              color: "#fff",
              width: 250,
            },
          }}
        >
          <NavListDrawer navLinks={navLinks} handleDrawerOpen={handleNavClick} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
