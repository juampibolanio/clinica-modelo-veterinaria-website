import { 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Box, 
    Typography, 
    Divider,
    IconButton
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import icon from "../assets/favicon.png"; 
import { 
    MainContainerSx, 
    HeaderContainerSx,
    LogoContainerSx,
    LogoSx, 
    TitleContainerSx,
    TitleSx,
    SubtitleSx,
    CloseButtonSx,
    CustomDividerSx,
    ListContainerSx,
    ListItemButtonSx,
    ListItemIconSx,
    ListItemTextSx,
    FooterContainerSx
} from "../styles/NavBars/NavListDrawerSx";

export default function NavListDrawer({ navLinks, handleDrawerOpen, onClose }) {
    const theme = useTheme();

    // Handler click for Scroll with Smooth
    const handleClick = (path, e) => {
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
        }
        handleDrawerOpen(path, e); 
    };

    return (
        <Box sx={MainContainerSx}>
            {/* Header Section */}
            <Box sx={HeaderContainerSx(theme)}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={LogoContainerSx(theme)}>
                        <Box
                            component="img"
                            src={icon}
                            alt="Clínica Modelo Veterinaria Logo"
                            sx={LogoSx}
                        />
                    </Box>
                    <Box sx={TitleContainerSx}>
                        <Typography variant="h6" sx={TitleSx(theme)}>
                            Clínica Modelo
                        </Typography>
                        <Typography variant="caption" sx={SubtitleSx(theme)}>
                            Veterinaria
                        </Typography>
                    </Box>
                </Box>
                
                <IconButton 
                    onClick={onClose} 
                    sx={CloseButtonSx(theme)}
                    size="small"
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider sx={CustomDividerSx(theme)} />

            {/* Navigation Links */}
            <Box sx={ListContainerSx}>
                <List disablePadding>
                    {navLinks.map((item, index) => (
                        <ListItem disablePadding key={item.title} sx={{ mb: 0.5 }}>
                            <ListItemButton
                                component={item.path.startsWith("#") ? "a" : NavLink}
                                href={item.path.startsWith("#") ? item.path : undefined}
                                to={!item.path.startsWith("#") ? item.path : undefined}
                                onClick={(e) => handleClick(item.path, e)}
                                sx={{
                                    ...ListItemButtonSx(theme),
                                    animationDelay: `${index * 0.1}s`,
                                    animation: "slideInRight 0.3s ease forwards",
                                    opacity: 0,
                                }}
                            >
                                {item.icon && (
                                    <ListItemIcon sx={ListItemIconSx(theme)}>
                                        {item.icon}
                                    </ListItemIcon>
                                )}
                                <ListItemText 
                                    primary={item.title} 
                                    primaryTypographyProps={{
                                        sx: ListItemTextSx(theme)
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Footer */}
            <Box sx={FooterContainerSx(theme)}>
                <Typography variant="caption" sx={{ 
                    color: `${theme.palette.background.paper}80`,
                    textAlign: "center",
                    fontFamily: "Nunito, sans-serif"
                }}>
                    © 2024 Clínica Modelo Veterinaria
                </Typography>
            </Box>
        </Box>
    );
}