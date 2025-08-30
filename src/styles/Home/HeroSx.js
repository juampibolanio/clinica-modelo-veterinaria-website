import heroImage from "../../assets/home/hero1.jpg";

// ----- Main Container -----
export const BoxSx = {
    width: "100%",
    height: { xs: "100vh", md: "calc(100vh - 70px)" },
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
}

// ----- Background Image -----
export const ImageBackgroundSx = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    transform: "scale(1.1)",
    zIndex: 1,
    transition: "transform 20s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
    }
}

// ----- Color Overlay -----
export const OverlayColorSx = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(55, 129, 227, 0.15)",
    zIndex: 2,
}

// ----- Gradient Overlay -----
export const GradientSx = () => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
        linear-gradient(
            135deg,
            rgba(55, 129, 227, 0.8) 0%,
            rgba(112, 39, 160, 0.6) 50%,
            rgba(230, 247, 255, 0.3) 100%
        )
    `,
    zIndex: 3,
});

// ----- Content Container -----
export const ContentContainerSx = {
    position: "relative",
    zIndex: 4,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "center", md: "flex-start" },
    justifyContent: { xs: "center", md: "space-evenly" },
    gap: { xs: 4, md: 6 },
    px: { xs: 2, sm: 4, md: 6 },
    py: { xs: 4, md: 8 },
}

// ----- Logo Container -----
export const LogoContainerSx = (theme) => ({
    width: { xs: 120, sm: 150, md: 180, lg: 200 },
    height: { xs: 120, sm: 150, md: 180, lg: 200 },
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.light}20)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    boxShadow: `
        0 20px 40px rgba(55, 129, 227, 0.3),
        0 10px 20px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3)
    `,
    border: `3px solid ${theme.palette.background.paper}`,
    backdropFilter: "blur(10px)",
    position: "relative",
    "&::before": {
        content: '""',
        position: "absolute",
        inset: -5,
        borderRadius: "50%",
        zIndex: -1,
        opacity: 0.5,
    },
    "&:hover": {
        transform: "translateY(-5px)",
        transition: "all 0.3s ease",
        boxShadow: `
            0 25px 50px rgba(55, 129, 227, 0.4),
            0 15px 25px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.4)
        `,
    }
});

// ----- Title -----
export const TitleSx = (theme) => ({
    fontWeight: 800,
    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
    lineHeight: { xs: 1.2, md: 1.1 },
    background: `linear-gradient(110deg, ${theme.palette.background.paper}, ${theme.palette.primary.light})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mb: { xs: 2, md: 3 },
    position: "relative",
    fontFamily: "Nunito, sans-serif",
    letterSpacing: "-0.02em",
    "&::after": {
        content: '""',
        position: "absolute",
        left: { xs: "50%", md: 0 },
        transform: { xs: "translateX(-50%)", md: "none" },
        bottom: { xs: -10, md: -15 },
        height: { xs: 4, md: 6 },
        width: { xs: 80, md: 120 },
        background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
        borderRadius: 3,
        boxShadow: `0 2px 4px rgba(55, 129, 227, 0.4)`,
    }
});

// ----- Subtitle -----
export const SubtitleSx = (theme) => ({
    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" },
    fontWeight: 400,
    lineHeight: 1.6,
    color: theme.palette.background.paper,
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
    mb: { xs: 4, md: 5 },
    fontFamily: "Nunito, sans-serif",
    maxWidth: { xs: "100%", md: "90%" },
    opacity: 0.95,
});

// ----- Button Group -----
export const ButtonGroupSx = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 2, sm: 3 },
    alignItems: "center",
    mt: 2,
}

// ----- Primary Button -----
export const HeroButtonSx = (theme) => ({
    position: "relative",
    textTransform: "none",
    fontSize: { xs: "1rem", md: "1.1rem" },
    fontWeight: 600,
    px: { xs: 4, md: 5 },
    py: { xs: 1.5, md: 2 },
    minWidth: { xs: 200, sm: 220 },
    color: theme.palette.background.paper,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    border: "none",
    borderRadius: 3,
    boxShadow: `
        0 8px 16px rgba(55, 129, 227, 0.4),
        0 4px 8px rgba(0, 0, 0, 0.2)
    `,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
    fontFamily: "Nunito, sans-serif",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
        transition: "left 0.5s ease",
    },
    "&:hover": {
        transform: "translateY(-2px)",
        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        boxShadow: `
            0 12px 24px rgba(55, 129, 227, 0.5),
            0 6px 12px rgba(0, 0, 0, 0.3)
        `,
        "&::before": {
            left: "100%",
        }
    },
    "&:active": {
        transform: "translateY(0)",
    }
});

// ----- Secondary Button -----
export const SecondaryButtonSx = (theme) => ({
    textTransform: "none",
    fontSize: { xs: "1rem", md: "1.1rem" },
    fontWeight: 500,
    px: { xs: 4, md: 5 },
    py: { xs: 1.5, md: 2 },
    minWidth: { xs: 200, sm: 180 },
    color: theme.palette.background.paper,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius: 3,
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    fontFamily: "Nunito, sans-serif",
    "&:hover": {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        transform: "translateY(-2px)",
        boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)",
    }
});

// ----- Floating Cards -----
export const FloatingCardSx = (theme) => ({
    width: { xs: 100, md: 120 },
    height: { xs: 100, md: 120 },
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `
        0 10px 20px rgba(0, 0, 0, 0.2),
        0 6px 10px rgba(55, 129, 227, 0.1)
    `,
    backdropFilter: "blur(10px)",
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "translateY(-5px) scale(1.05)",
        boxShadow: `
            0 15px 30px rgba(0, 0, 0, 0.3),
            0 8px 15px rgba(55, 129, 227, 0.2)
        `,
    }
});

// ----- Arrow Section -----
export const ArrowSx = (theme) => ({
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 100,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(to top, ${theme.palette.background.default}40, transparent)`,
    zIndex: 5,
    borderRadius: "50% 50% 0 0",
});

// ----- Arrow Icon -----
export const ArrowIconSx = (theme) => ({
    fontSize: { xs: 40, md: 48 },
    color: theme.palette.background.paper,
    cursor: "pointer",
    transition: "all 0.3s ease",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
    animation: "bounce 3s infinite ease-in-out",
    "&:hover": {
        color: theme.palette.primary.light,
        transform: "scale(1.1)",
    },
    "@keyframes bounce": {
        "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
        },
        "40%": {
            transform: "translateY(-15px)",
        },
        "60%": {
            transform: "translateY(-8px)",
        },
    },
});