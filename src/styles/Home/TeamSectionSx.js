/*----------------- Veterinary Team Styles -----------------*/

/* ---- Box 5 - Team Section Container ---- */
export const TeamSectionSx = () => ({
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    minHeight: "100vh",
    py: { xs: 10, md: 12 },
    px: { xs: 3, md: 6 },
    gap: { xs: 6, md: 8 },
    boxSizing: "border-box",

    background: "linear-gradient(135deg, #fafbfc 0%, #f1f5f9 50%, #e2e8f0 100%)",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(112, 39, 160, 0.05), rgba(55, 129, 227, 0.05))",
        animation: "float 8s ease-in-out infinite",
        zIndex: 1,
    },

    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-50px",
        left: "-50px",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "linear-gradient(45deg, rgba(55, 129, 227, 0.03), rgba(112, 39, 160, 0.03))",
        animation: "float 10s ease-in-out infinite reverse",
        zIndex: 1,
    },

    "@keyframes pulse": {
        "0%, 100%": { transform: "scale(1)", opacity: 0.3 },
        "50%": { transform: "scale(1.2)", opacity: 0.1 }
    }
});

/* ---- Gradient  ---- */
export const TeamGradientSx = (theme) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
    backgroundImage: `
        linear-gradient(
            to bottom,
            ${theme.palette.background.default} 0%,
            rgba(248, 250, 252, 0.8) 3%,
            rgba(255,255,255,0.1) 10%,
            rgba(255,255,255,0.1) 90%,
            rgba(248, 250, 252, 0.8) 97%,
            ${theme.palette.background.default} 100%
        )
    `,
    backdropFilter: "blur(0.5px)",

    [theme.breakpoints.down("sm")]: {
        backgroundImage: `
            linear-gradient(
                to bottom,
                ${theme.palette.background.default} 0%,
                rgba(248, 250, 252, 0.9) 2%,
                rgba(255,255,255,0.1) 8%,
                rgba(255,255,255,0.1) 92%,
                rgba(248, 250, 252, 0.9) 98%,
                ${theme.palette.background.default} 100%
            )
        `,
    },
});

/* ---- Header Row: Text and Image ---- */
export const TeamHeaderSx = () => ({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    mb: 6,
    position: "relative",
    zIndex: 4,
    gap: { xs: 4, md: 12 },
    px: { xs: 3, md: 8 },
    animation: "headerFadeIn 0.8s ease-out 0.2s both",

    "@keyframes headerFadeIn": {
        "0%": { opacity: 0, transform: "translateY(50px)" },
        "100%": { opacity: 1, transform: "translateY(0)" }
    }
});

export const TeamTextTitleSx = () => ({
    fontWeight: 700,
    mb: 2,
    fontFamily: "Nunito",
    fontSize: { xs: "2.2rem", md: "3rem" },
    background: "linear-gradient(135deg, #7027A0, #3781E3)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    position: "relative",
    animation: "typewriter 1s ease-out 0.5s both",

    "@keyframes typewriter": {
        "0%": { width: 0, opacity: 0 },
        "50%": { opacity: 1 },
        "100%": { width: "100%", opacity: 1 }
    }
});

export const TeamTextDescriptionSx = () => ({
    lineHeight: 1.7,
    fontSize: { xs: "1rem", md: "1.1rem" },
    color: "text.secondary",
    animation: "fadeIn 0.6s ease-out 1s both",

    "@keyframes fadeIn": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
    }
});

/* ---- Left Column: Text ---- */
export const TeamTextColumnSx = () => ({
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-start" },
    textAlign: { xs: "center", md: "left" },
    position: "relative",
    "&::after": {
        content: '""',
        display: { xs: "none", md: "block" },
        position: "absolute",
        right: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "2px",
        height: "60%",
        background: "linear-gradient(180deg, transparent, rgba(112, 39, 160, 0.3), transparent)",
    }
});

/* ---- Right Column: Placeholder Image/Logo ---- */
export const PlaceholderImageSx = () => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: 180, md: 240, lg: 320 },
    height: { xs: 190, md: 250, lg: 330 },
    borderRadius: 6,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    filter: "drop-shadow(0 10px 20px rgba(112, 39, 160, 0.1))",
    animation: "logoFloat 3s ease-in-out infinite",

    "&:hover": {
        transform: "scale(1.05) rotate(2deg)",
        filter: "drop-shadow(0 15px 30px rgba(112, 39, 160, 0.2))",
    },

    "@keyframes logoFloat": {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-10px)" }
    }
});

/* ---- Team Cards Grid ---- */
export const TeamGridSx = () => ({
    justifyContent: "center",
    width: "100%",
    position: "relative",
    zIndex: 4,
    animation: "gridFadeIn 0.8s ease-out 0.8s both",
    gap: { xs: 4, md: 6 },

    "@keyframes gridFadeIn": {
        "0%": { opacity: 0, transform: "translateY(40px)" },
        "100%": { opacity: 1, transform: "translateY(0)" }
    }
});