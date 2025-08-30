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

