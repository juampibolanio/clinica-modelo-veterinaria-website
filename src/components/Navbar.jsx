import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/favicon.png";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";
import { AppBarSx, DesktopLinksContainerSx, LogoSx, Title1Sx, Title2Sx, ToolBarSx, NavButtonSx, MobileBurguerMenuSx } from "../styles/NavBars/NavBarSx";

export default function NavBar({ navLinks }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);

  // Handler click for Scroll with Smooth
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
    <AppBar position="sticky" sx={AppBarSx} >
      <Toolbar sx={ToolBarSx}>

        {/* ----- Title and Logo ----- */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="img" src={icon} alt="Clínica Modelo Veterinaria Logo" sx={LogoSx} />
          <Box>
            <Typography variant="h6" sx={Title1Sx}>Clínica Modelo</Typography>
            <Typography variant="body2" sx={Title2Sx}>Veterinaria</Typography>
          </Box>
        </Box>

        {/*----- Desktop Links ------*/}
        <Box sx={DesktopLinksContainerSx}>
          {navLinks.map(link =>
            link.path.startsWith("#") ? (
              <Button
                key={link.title}
                component="a"
                href={link.path}
                startIcon={link.icon}
                disableElevation
                disableRipple
                sx={{ ...NavButtonSx, color: "#fff" }}
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
                sx={{ ...NavButtonSx, color: "#fff" }}
              >
                {link.title}
              </Button>
            )
          )}
        </Box>

        {/*------ Mobile Links ---------*/}
        <IconButton size="large" onClick={handleDrawerToggle} sx={MobileBurguerMenuSx}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: { background: "linear-gradient(180deg, #3781E3 0%, #7027A0 100%)", color: "#fff", width: 250,},
          }}
        >
          <NavListDrawer navLinks={navLinks} handleDrawerOpen={handleNavClick} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}