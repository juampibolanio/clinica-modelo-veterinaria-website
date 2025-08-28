import heroImage from "../../assets/home/hero1.jpg";
// ----- Box 1 - Main Box ----- 
export const BoxSx = {
    width: "100%",
    height: "calc(100vh - 120px)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    px: { xs: 3, md: 10 },
    color: "#fff",
}

// ----- Box 2 - Image Background -----

export const ImageBackgroundSx = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 1,
}

// ----- Box 3 - Color Overlay -----

export const OverlayColorSx = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(112, 39, 160, 0.2)",
    zIndex: 2,
}

// ----- Box 4 - Gradient -----
export const GradientSx = (theme) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
            linear-gradient(
              to bottom,
              ${theme.palette.background.default} 0%,
              rgba(230,247,255,0) 0%,
              rgba(230,247,255,0) 100%,
              ${theme.palette.background.default} 100%
            )
          `,
    zIndex: 3,
});

// ----- Box 7 - Content Section -----

export const ContentSectionSx = (theme) => ({
    width: { xs: 85, md: 140 },
    height: { xs: 85, md: 140 },
    borderRadius: "50%",
    background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.background.default})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
});

// Title 

export const TitleSx = (theme) => ({
    fontWeight: 700,
    fontSize: { xs: "2rem", md: "3.8rem" },
    position: "relative",
    display: "inline-block",
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: -8,
        height: 4,
        width: { xs: 40, md: 90 },
        backgroundColor: theme.palette.primary.light,
        borderRadius: 2,
    }
});

// Subtitle 

export const SubtitleSx = () => ({
    fontSize: { xs: "1rem", md: "1.2rem" },
    mb: 4,
})

// ----- Box 9 - Arrow -----

// Arrow Box
export const ArrowSx = (theme) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
    zIndex: 5,
})

//Keyboard Arrow Down Icon
export const ArrowIconSx = (theme) => ({
    fontSize: 48,
    color: theme.palette.primary.light,
    cursor: "pointer",
    mb: 1,
    animation: "bounce 2s infinite",
    "@keyframes bounce": {
        "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
        },
        "40%": {
            transform: "translateY(-10px)",
        },
        "60%": {
            transform: "translateY(-5px)",
        },
    },
})

// Hero Button
export const HeroButtonSx = () => ({
    position: "relative",
    textTransform: "none",
    fontSize: 16,
    px: 4,
    py: 1.5,
    color: "#fff",
    border: "2px solid",
    borderColor: "primary.light",
    backgroundColor: "primary.main",
    transition: "all 0.3s ease",
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 3,
        width: 0,
        backgroundColor: "primary.light",
        transition: "width 0.3s ease",
    },
    "&:hover": {
        backgroundColor: 'primary.main',
        color: "#fff",
    },
    "&:hover::after": {
        width: "100%",
    },
});
