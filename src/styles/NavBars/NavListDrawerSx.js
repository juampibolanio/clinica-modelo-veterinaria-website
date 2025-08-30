/* ------ NavList Drawer Styles  ------ */

/* ---- Main Container ---- */
export const MainContainerSx = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    "@keyframes slideInRight": {
        "0%": {
            opacity: 0,
            transform: "translateX(50px)",
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)",
        },
    },
};

/* ---- Header Container ---- */
export const HeaderContainerSx = (theme) => ({
    display: "flex", 
    alignItems: "center",
    justifyContent: "space-between",
    p: 3,
    pt: 4,
    background: `linear-gradient(135deg, 
        ${theme.palette.background.paper}15 0%, 
        ${theme.palette.background.paper}05 100%
    )`,
    backdropFilter: "blur(20px)",
    borderBottom: `1px solid ${theme.palette.background.paper}20`,
});

/* ---- Logo Container ---- */
export const LogoContainerSx = (theme) => ({
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.light}30)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `
        0 8px 16px rgba(255, 255, 255, 0.1),
        0 4px 8px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3)
    `,
    border: `2px solid ${theme.palette.background.paper}40`,
    flexShrink: 0,
});

/* ---- Logo Image ---- */
export const LogoSx = {
    width: 40,
    height: 40,
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
};

/* ---- Title Container ---- */
export const TitleContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0,
};

/* ---- Main Title ---- */
export const TitleSx = (theme) => ({
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "1.2rem",
    lineHeight: 1,
    color: theme.palette.background.paper,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    letterSpacing: "-0.01em",
});

/* ---- Subtitle ---- */
export const SubtitleSx = (theme) => ({
    fontFamily: "Nunito, sans-serif",
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1,
    color: theme.palette.background.paper,
    opacity: 0.8,
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
    letterSpacing: "0.02em",
    mt: -0.2,
});

/* ---- Close Button ---- */
export const CloseButtonSx = (theme) => ({
    color: theme.palette.background.paper,
    backgroundColor: `${theme.palette.background.paper}15`,
    backdropFilter: "blur(10px)",
    border: `1px solid ${theme.palette.background.paper}30`,
    width: 40,
    height: 40,
    transition: "all 0.2s ease",
    
    "&:hover": {
        backgroundColor: `${theme.palette.background.paper}25`,
        transform: "scale(1.05)",
        
        "& svg": {
            transform: "rotate(90deg)",
        }
    },
    
    "& svg": {
        fontSize: "1.2rem",
        transition: "transform 0.2s ease",
    }
});

/* ---- Custom Divider ---- */
export const CustomDividerSx = (theme) => ({
    borderColor: `${theme.palette.background.paper}30`,
    mx: 2,
    "&::before, &::after": {
        borderColor: `${theme.palette.background.paper}30`,
    }
});

/* ---- List Container ---- */
export const ListContainerSx = {
    flex: 1,
    px: 1,
    pt: 2,
    overflow: "auto",

    "&::-webkit-scrollbar": {
        width: 4,
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 2,
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
        }
    },
};

/* ---- List Item Button ---- */
export const ListItemButtonSx = (theme) => ({
    borderRadius: 2,
    mx: 1,
    mb: 0.5,
    py: 1.5,
    px: 2,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `linear-gradient(90deg, 
            transparent 0%, 
            ${theme.palette.background.paper}10 50%, 
            transparent 100%
        )`,
        transform: "translateX(-100%)",
        transition: "transform 0.3s ease",
        zIndex: 0,
    },
    
    "&:hover": {
        backgroundColor: `${theme.palette.background.paper}20`,
        transform: "translateX(8px)",
        
        "&::before": {
            transform: "translateX(0)",
        }
    },
    
    "&:active": {
        transform: "translateX(4px)",
    },
    
    "&:focus-visible": {
        outline: `2px solid ${theme.palette.background.paper}60`,
        outlineOffset: 2,
    }
});

/* ---- List Item Icon ---- */
export const ListItemIconSx = (theme) => ({
    color: theme.palette.background.paper,
    minWidth: 40,
    opacity: 0.9,
    transition: "all 0.2s ease",
    
    "& svg": {
        fontSize: "1.3rem",
        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
    },
    
    ".MuiListItemButton-root:hover &": {
        opacity: 1,
        transform: "scale(1.1)",
        color: theme.palette.primary.light,
    }
});

/* ---- List Item Text ---- */
export const ListItemTextSx = (theme) => ({
    fontFamily: "Nunito, sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    color: theme.palette.background.paper,
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
    transition: "all 0.2s ease",
    position: "relative",
    zIndex: 1,
});

/* ---- Footer Container ---- */
export const FooterContainerSx = (theme) => ({
    p: 3,
    pb: 4,
    borderTop: `1px solid ${theme.palette.background.paper}20`,
    background: `linear-gradient(135deg, 
        ${theme.palette.background.paper}05 0%, 
        ${theme.palette.background.paper}15 100%
    )`,
    backdropFilter: "blur(20px)",
    mt: "auto",
});