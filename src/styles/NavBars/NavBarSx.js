/* ---- NavBar Styles Mejorados ----- */

/* ---- Main AppBar ---- */
export const AppBarSx = (scrolled, theme) => ({
    background: scrolled 
        ? `linear-gradient(135deg, ${theme.palette.background.paper}f5, ${theme.palette.background.paper}f8)`
        : `linear-gradient(135deg, ${theme.palette.primary.main}f0, ${theme.palette.secondary.main}e8)`,
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? `1px solid ${theme.palette.primary.light}30` : "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: scrolled 
        ? `0 8px 32px rgba(55, 129, 227, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)`
        : "0 4px 20px rgba(55, 129, 227, 0.2)",
    zIndex: 1200,
});

/* ---- Main ToolBar ---- */
export const ToolBarSx = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: { xs: 70, sm: 80 },
    py: { xs: 1, sm: 1.5 },
};

/* ---- Brand Container ---- */
export const BrandContainerSx = {
    display: "flex",
    alignItems: "center",
    gap: { xs: 1.5, sm: 2 },
    cursor: "pointer",
    transition: "transform 0.2s ease",
    "&:hover": {
        transform: "scale(1.02)",
    }
};

/* ---- Logo Container ---- */
export const LogoContainerSx = (theme) => ({
    width: { xs: 50, sm: 60, md: 65 },
    height: { xs: 50, sm: 60, md: 65 },
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.light}20)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `
        0 4px 12px rgba(55, 129, 227, 0.2),
        0 2px 6px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3)
    `,
    border: `2px solid ${theme.palette.background.paper}`,
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "translateY(-1px)",
        boxShadow: `
            0 6px 16px rgba(55, 129, 227, 0.3),
            0 3px 8px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.4)
        `,
    }
});

/* ---- Logo Image ---- */
export const LogoSx = {
    width: { xs: 35, sm: 42, md: 45 },
    height: { xs: 35, sm: 42, md: 45 },
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
};

/* ---- Title Container ---- */
export const TitleContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0,
};

/* ---- Main Title ---- */
export const Title1Sx = (theme) => ({
    fontFamily: "Nunito, sans-serif",
    fontWeight: 800,
    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" },
    lineHeight: 1,
    color: theme.palette.background.paper,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    letterSpacing: "-0.01em",
});

/* ---- Subtitle ---- */
export const Title2Sx = (theme) => ({
    fontFamily: "Nunito, sans-serif",
    fontWeight: 400,
    fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
    lineHeight: 1,
    color: theme.palette.background.paper,
    opacity: 0.9,
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
    letterSpacing: "0.02em",
    mt: -0.2,
});

/* ---- Desktop Links Container ---- */
export const DesktopLinksContainerSx = {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 1,
    ml: "auto",
};

/* ---- Navigation Button ---- */
export const NavButtonSx = (theme) => ({
    position: "relative",
    textTransform: "none",
    fontWeight: 500,
    fontSize: { md: "0.95rem", lg: "1rem" },
    fontFamily: "Nunito, sans-serif",
    px: { md: 2, lg: 2.5 },
    py: 1.2,
    color: theme.palette.background.paper,
    borderRadius: 2,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    backdropFilter: "blur(10px)",
    minWidth: "auto",
    backgroundColor: "transparent",
    
    // Icon styling
    "& .MuiButton-startIcon": {
        mr: 1,
        transition: "transform 0.2s ease",
        "& svg": {
            fontSize: "1.1rem",
        }
    },
    
    // Underline effect
    "&::after": {
        content: '""',
        position: "absolute",
        left: "50%",
        bottom: 6,
        height: 2,
        width: 0,
        backgroundColor: theme.palette.primary.light,
        borderRadius: 1,
        transform: "translateX(-50%)",
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: `0 0 8px ${theme.palette.primary.light}50`,
    },
    
    // Hover effects
    "&:hover": {
        color: theme.palette.primary.light,
        backgroundColor: `${theme.palette.background.paper}25`,
        transform: "translateY(-1px)",
        
        "& .MuiButton-startIcon": {
            transform: "scale(1.1)",
        },
        
        "&::after": {
            width: "70%",
        }
    },
    
    // Active state
    "&:active": {
        transform: "translateY(0)",
    },
    
    // Focus styles for accessibility
    "&:focus-visible": {
        outline: `2px solid ${theme.palette.primary.light}`,
        outlineOffset: 2,
    }
});

/* ---- Mobile Burger Menu ---- */
export const MobileBurguerMenuSx = (theme) => ({
    display: { xs: "flex", md: "none" },
    color: theme.palette.background.paper,
    width: 48,
    height: 48,
    borderRadius: 2,
    transition: "all 0.2s ease",
    backdropFilter: "blur(10px)",
    backgroundColor: `${theme.palette.background.paper}15`,
    border: `1px solid ${theme.palette.background.paper}30`,
    
    "& svg": {
        fontSize: "1.5rem",
        transition: "transform 0.2s ease",
    },
    
    "&:hover": {
        backgroundColor: `${theme.palette.background.paper}25`,
        transform: "scale(1.05)",
        
        "& svg": {
            transform: "rotate(90deg)",
        }
    },
    
    "&:active": {
        transform: "scale(0.95)",
    }
});

/* ---- Drawer Paper ---- */
export const DrawerPaperSx = (theme) => ({
    width: { xs: 280, sm: 320 },
    background: `linear-gradient(180deg, 
        ${theme.palette.primary.main} 0%, 
        ${theme.palette.primary.dark} 30%,
        ${theme.palette.secondary.main} 70%,
        ${theme.palette.secondary.dark} 100%
    )`,
    backdropFilter: "blur(20px)",
    border: "none",
    boxShadow: `
        -8px 0 32px rgba(0, 0, 0, 0.3),
        -4px 0 16px rgba(55, 129, 227, 0.2)
    `,
    
    // Custom scrollbar
    "&::-webkit-scrollbar": {
        width: 6,
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: `${theme.palette.background.paper}20`,
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: `${theme.palette.background.paper}50`,
        borderRadius: 3,
        "&:hover": {
            backgroundColor: `${theme.palette.background.paper}70`,
        }
    },
});