import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import icon from "../assets/favicon.png"; 

export default function NavListDrawer({ navLinks, handleDrawerOpen }) {

    // Manejar desplazamiento al hacer click.
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
        <Box sx={{ width: 250 }}>
            {/*-------------------------------- Logo y nombre --------------------------------*/}
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                <Box
                    component="img"
                    src={icon}
                    alt="Clínica Modelo Veterinaria Logo"
                    sx={{ width: 80, height: 80, mr: 1 }}
                />
                <Typography variant="h6" sx={{ fontFamily: "Nunito", color: "background.paper", fontSize: 16 }}>
                    Menú
                </Typography>
            </Box>
            <Divider />

            {/*-------------------------------- Lista de links --------------------------------*/}
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
