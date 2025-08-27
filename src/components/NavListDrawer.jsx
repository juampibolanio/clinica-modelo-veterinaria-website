import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function NavListDrawer({ navLinks, handleNavClick }) {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List>
                    {navLinks.map((item) => (
                        <ListItem
                            disablePadding
                            key={item.title}
                        >
                            <ListItemButton
                                component={item.path.startsWith("#") ? "a" : NavLink}
                                href={item.path.startsWith("#") ? item.path : undefined}
                                to={!item.path.startsWith("#") ? item.path : undefined}
                                onClick={handleNavClick}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
}