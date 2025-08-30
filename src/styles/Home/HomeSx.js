/* --------------- Main Home Container ---------- */

export const MainHomeContainerSx = () => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden', 
})

/*----------------- Services Styles -----------------*/

/*----- Box 1 - Services Section Container -----*/
export const ServicesContainerSx = () => ({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: 6, md: 8 },
    py: { xs: 10, md: 12 },
    px: { xs: 3, md: 6 },
    minHeight: "100vh",
    position: "relative",
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

    // global animations
    "@keyframes float": {
        "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
        "50%": { transform: "translateY(-30px) rotate(180deg)" }
    },

    "& > *": {
        position: "relative",
        zIndex: 2,
    }
})

/* ---- Box 2 - Collage Photos ---- */
export const CollagePhotosSx = () => ({
    width: { xs: "100%", md: "45%" },
    p: { xs: 2, md: 3 },
    borderRadius: 6,
    background: "linear-gradient(135deg, rgba(55,129,227,0.08), rgba(112,39,160,0.08))",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gridAutoRows: { xs: "200px", sm: "200px", md: "220px" },
    gap: 3,
    animation: "slideInLeft 0.8s ease-out",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

    "@keyframes slideInLeft": {
        "0%": { opacity: 0, transform: "translateX(-100px)" },
        "100%": { opacity: 1, transform: "translateX(0)" }
    },
})

/* ---- Box 3 - Photo Collage ---- */
export const PhotoCollageSx = (index) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 4,
    gridColumn: index === 4 ? { xs: "1 / -1" } : "auto",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    filter: "brightness(1) contrast(1.05) saturate(1.1)",
    animation: `photoFadeIn 0.6s ease-out ${0.2 + index * 0.1}s both`,


    "&:hover::after": {
        opacity: 1,
    },

    "@keyframes photoFadeIn": {
        "0%": { opacity: 0, transform: "scale(0.8)" },
        "100%": { opacity: 1, transform: "scale(1)" }
    }
})

/* ----- Box 4 - Right Column: Services Cards----- */
export const ServicesCardsSx = () => ({
    width: { xs: "100%", md: "50%" },
    display: "flex",
    flexDirection: "column",
    gap: 4,
    animation: "slideInRight 0.8s ease-out 0.3s both",

    "@keyframes slideInRight": {
        "0%": { opacity: 0, transform: "translateX(100px)" },
        "100%": { opacity: 1, transform: "translateX(0)" }
    }
})

/* --- Title --- */
export const TitleServicesSx = () => ({
    fontFamily: "Nunito",
    fontSize: { xs: "2.2rem", md: "3rem" },
    fontWeight: 700,
    background: "linear-gradient(135deg, #7027A0, #3781E3)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    position: "relative",
    animation: "titleReveal 1s ease-out 0.5s both",

    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-8px",
        left: 0,
        width: "0%",
        height: "4px",
        background: "linear-gradient(90deg, #7027A0, #3781E3)",
        borderRadius: "2px",
        animation: "lineExpand 0.8s ease-out 1.2s both",
    },

    "@keyframes titleReveal": {
        "0%": { opacity: 0, transform: "translateY(30px)" },
        "100%": { opacity: 1, transform: "translateY(0)" }
    },

    "@keyframes lineExpand": {
        "0%": { width: "0%" },
        "100%": { width: "80px" }
    }
})

/* ---- Description ---- */
export const DescriptionServicesSx = () => ({
    fontFamily: "Nunito",
    fontSize: { xs: "1rem", md: "1.1rem" },
    color: "text.secondary",
    mb: 3,
    lineHeight: 1.7,
    animation: "fadeInUp 0.6s ease-out 0.8s both",

    "@keyframes fadeInUp": {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" }
    }
})

/* ---- Gradient line  ---- */
export const SectionLineSx = () => ({
    width: 80,
    height: 4,
    background: "linear-gradient(90deg, #7027A0, #3781E3)",
    mb: 3,
    borderRadius: 2,
    boxShadow: "0 2px 8px rgba(112, 39, 160, 0.3)",
    animation: "lineSlide 0.6s ease-out 0.6s both",

    "@keyframes lineSlide": {
        "0%": { opacity: 0, width: 0 },
        "100%": { opacity: 1, width: "80px" }
    }
})

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


/*----------------- Veterinary Contact Styles -----------------*/

/* ---- Contact Section Container ---- */
export const ContactSectionSx = () => ({
    position: "relative",
    width: "100%",
    py: { xs: 8, md: 12 },
    px: { xs: 3, md: 6 },
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    overflow: "hidden",
});

/* ---- Decorative Circle Top Right ---- */
export const ContactCircleTopRightSx = () => ({
    position: "absolute",
    top: "-50px",
    right: "-50px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background:
        "linear-gradient(135deg, rgba(112, 39, 160, 0.1), rgba(55, 129, 227, 0.1))",
    animation: "float 6s ease-in-out infinite",
    "@keyframes float": {
        "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
        "50%": { transform: "translateY(-20px) rotate(180deg)" },
    },
});

/* ---- Decorative Circle Bottom Left ---- */
export const ContactCircleBottomLeftSx = () => ({
    position: "absolute",
    bottom: "-30px",
    left: "-30px",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background:
        "linear-gradient(45deg, rgba(55, 129, 227, 0.08), rgba(112, 39, 160, 0.08))",
    animation: "float 8s ease-in-out infinite reverse",
});

/* ---- Paw Print Decorations ---- */
export const ContactPawPrintSx = (index) => ({
    position: "absolute",
    width: "30px",
    height: "30px",
    opacity: 0.03,
    transform: `rotate(${index * 45}deg)`,
    top: `${20 + index * 20}%`,
    right: `${10 + index * 15}%`,
    "&::before": {
        content: '"🐾"',
        fontSize: "24px",
        position: "absolute",
    },
});

/* ---- Header Container ---- */
export const ContactHeaderSx = () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    mb: 8,
    animation: "fadeInUp 0.8s ease-out",
});

/* ---- Header Title ---- */
export const ContactHeaderTitleSx = () => ({
    fontFamily: "Nunito",
    fontWeight: 700,
    fontSize: { xs: "2.2rem", md: "3rem" },
    background: "linear-gradient(135deg, #7027A0, #3781E3)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mb: 2,
    position: "relative",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-8px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60px",
        height: "4px",
        background: "linear-gradient(90deg, #7027A0, #3781E3)",
        borderRadius: "2px",
    },
});

/* ---- Header Description ---- */
export const ContactHeaderDescriptionSx = () => ({
    mt: 3,
    fontFamily: "Nunito",
    fontSize: { xs: "1.1rem", md: "1.2rem" },
    color: "text.secondary",
    maxWidth: "800px",
    lineHeight: 1.6,
    opacity: 0.9,
});

/* ---- Main Content Grid ---- */
export const ContactMainContentSx = () => ({
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    gap: 6,
    alignItems: "stretch",
    justifyContent: "center",
});

/* ---- Contact Info List ---- */
export const ContactInfoListSx = () => ({
    flex: 1,
    maxWidth: { lg: "45%" },
    display: "flex",
    flexDirection: "column",
    gap: 3,
});

/* ---- Contact Info Card ---- */
export const ContactInfoCardSx = (color, delay) => ({
    display: "flex",
    alignItems: "flex-start",
    gap: 3,
    p: { xs: 3, md: 4 },
    borderRadius: 4,
    background:
        "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    animation: `slideInLeft 0.8s ease-out ${delay}s both`,
    "&:hover": {
        transform: "translateY(-8px) scale(1.02)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        "& .contact-icon": {
            transform: "scale(1.1) rotate(5deg)",
            color: color,
        },
        "&::before": {
            transform: "translateX(0%)",
        },
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        background: `linear-gradient(90deg, ${color}, ${color}88)`,
        transform: "translateX(-100%)",
        transition: "transform 0.6s ease",
    },
    "@keyframes slideInLeft": {
        "0%": { opacity: 0, transform: "translateX(-50px)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
    },
});

/* ---- Contact Info Icon ---- */
export const ContactIconBoxSx = (color) => ({
    mt: 0.5,
    color: "text.secondary",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 3,
    background: `linear-gradient(135deg, ${color}15, ${color}05)`,
});

/* ---- Map Section ---- */
export const ContactMapSectionSx = () => ({
    flex: 1,
    maxWidth: { lg: "55%" },
    position: "relative",
    animation: "fadeIn 1s ease-out 0.5s both",
    "@keyframes fadeIn": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
    },
});

/* ---- Map Box ---- */
export const ContactMapBoxSx = () => ({
    position: "relative",
    height: { xs: "400px", md: "830px" },
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    border: "3px solid transparent",
    background:
        "linear-gradient(white, white) padding-box, linear-gradient(135deg, #3781E3, #7027A0) border-box",
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    },
});

/* ---- Map Loading Placeholder ---- */
export const ContactMapLoadingSx = () => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
    zIndex: 1,
});

/* ---- Map Overlay Info ---- */
export const ContactMapOverlaySx = () => ({
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 3,
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(10px)",
    p: 2,
    borderRadius: 3,
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    transform: "translateY(-100px)",
    opacity: 0,
    transition: "all 0.5s ease",
    "&:hover": {
        transform: "translateY(0)",
        opacity: 1,
    },
});

/* ---- Floating Action Button ---- */
export const ContactFabSx = () => ({
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 4,
});

/* ---- Google Maps Button ---- */
export const ContactGoogleMapsButtonSx = () => ({
    display: "flex",
    alignItems: "center",
    gap: 1,
    px: 3,
    py: 1.5,
    background: "linear-gradient(135deg, #3781E3, #7027A0)",
    color: "white",
    borderRadius: 50,
    textDecoration: "none",
    boxShadow: "0 8px 24px rgba(55, 129, 227, 0.4)",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    fontWeight: 600,
    "&:hover": {
        transform: "translateY(-2px) scale(1.05)",
        boxShadow: "0 12px 32px rgba(55, 129, 227, 0.5)",
    },
});
