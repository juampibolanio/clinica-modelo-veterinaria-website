import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import icon from "../assets/favicon.png"; 
import { LogoSx, MainContainerSx, TitleLogoContainerSx, TitleSx } from "../styles/NavBars/NavListDrawerSx";

export default function NavListDrawer({ navLinks, handleDrawerOpen }) {

    // Handler click for Scroll with Smooth
    const handleClick = (path, e) => {
        if (path.startsWith("#")) {
            e?.preventDefault();
            const id = path.replace("#", "");
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
        handleDrawerOpen(path, e); 
    };

    return (
        <Box sx={MainContainerSx}>

            {/*------ Title and Logo -----*/}
            <Box sx={TitleLogoContainerSx}>
                <Box
                    component="img"
                    src={icon}
                    alt="Clínica Modelo Veterinaria Logo"
                    sx={LogoSx}
                />
                <Typography variant="h6" sx={TitleSx}>
                    Menú
                </Typography>
            </Box>
            <Divider />

            {/*----- Links List -----*/}
            <List>
                {navLinks.map((item) => (
                    <ListItem disablePadding key={item.title}>
                        <ListItemButton
                            component={item.path.startsWith("#") ? "a" : NavLink}
                            href={item.path.startsWith("#") ? item.path : undefined}
                            to={!item.path.startsWith("#") ? item.path : undefined}
                            onClick={(e) => handleClick(item.path, e)}
                        >
                            {item.icon && <ListItemIcon sx={{color: "background.default"}}>{item.icon}</ListItemIcon>}
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
