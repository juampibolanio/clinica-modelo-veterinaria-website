/* ---- Card  styles ---- */
export const CardSx = () => ({
    maxWidth: 360,
    width: "100%",
    minHeight: 280,
    borderRadius: 6,
    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
    overflow: "hidden",
    position: "relative",
    
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        background: "linear-gradient(90deg, #3781E3, #7027A0, #3781E3)",
        backgroundSize: "200% 100%",
        animation: "gradientShift 3s ease-in-out infinite",
    },

    animation: "serviceCardEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) var(--delay) both",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    
    "&:hover": {
        transform: "translateY(-16px) scale(1.03)",
        boxShadow: "0 25px 50px rgba(112,39,160,0.25)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 100%)",
        
        "&::before": {
            height: "6px",
            animation: "gradientShift 1s ease-in-out infinite",
        },
        
        "& .service-icon": {
            transform: "scale(1.15) rotate(5deg)",
            boxShadow: "0 12px 30px rgba(55, 129, 227, 0.4)",
            
            "& .icon-pulse": {
                transform: "scale(1.5)",
                opacity: 0.6,
            }
        },
        
        "& .floating-dot": {
            opacity: 1,
            transform: "translateY(0)",
        },
        
        "& .shimmer-overlay": {
            left: "100%",
        }
    },

    "@keyframes serviceCardEntrance": {
        "0%": { 
            opacity: 0, 
            transform: "translateY(60px) rotateX(25deg)",
            filter: "blur(10px)"
        },
        "100%": { 
            opacity: 1, 
            transform: "translateY(0) rotateX(0deg)",
            filter: "blur(0px)"
        }
    },

    "@keyframes gradientShift": {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" }
    },
})

/* ---- Container  ---- */
export const ContentBoxSx = () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: { xs: 3, md: 4 },
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    height: "100%",
    justifyContent: "space-between",
});

/* ---- Icon  ---- */
export const IconSx = () => ({
    mb: 3,
    width: { xs: 70, md: 80 },
    height: { xs: 70, md: 80 },
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3781E3, #7027A0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: { xs: 28, md: 36 },
    position: "relative",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 8px 20px rgba(55, 129, 227, 0.3)",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "15%",
        left: "15%",
        width: "35%",
        height: "35%",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
        pointerEvents: "none",
    },
    "& .icon-pulse": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(55, 129, 227, 0.3), rgba(112, 39, 160, 0.3))",
        transform: "scale(1)",
        opacity: 0.4,
        transition: "all 0.6s ease",
        zIndex: -1,
        animation: "iconPulse 2s ease-in-out infinite",
    },

    "@keyframes iconPulse": {
        "0%, 100%": { 
            transform: "scale(1)", 
            opacity: 0.4 
        },
        "50%": { 
            transform: "scale(1.2)", 
            opacity: 0.1 
        }
    }
})

/* ---- Title ---- */
export const TitleSx = () => ({
    fontWeight: 700,
    mb: 2,
    fontFamily: "Nunito",
    fontSize: { xs: "1.1rem", md: "1.25rem" },
    background: "linear-gradient(135deg, #7027A0, #3781E3)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    position: "relative",
    lineHeight: 1.3,
    filter: "drop-shadow(0 2px 4px rgba(112, 39, 160, 0.1))",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-8px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "40px",
        height: "2px",
        background: "linear-gradient(90deg, #3781E3, #7027A0)",
        borderRadius: "1px",
        opacity: 0.6,
    }
})

/* ---- Description  ---- */
export const DescriptionSx = () => ({
    fontFamily: "Nunito",
    color: "text.secondary",
    lineHeight: 1.6,
    fontSize: { xs: "0.95rem", md: "1rem" },
    opacity: 0.9,
    maxWidth: "280px",
    px: 1,
})

/* ---- Decorative Floating Elements ---- */
export const FloatingElementsSx = () => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
    
    "& .floating-dot": {
        position: "absolute",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "linear-gradient(45deg, rgba(55, 129, 227, 0.3), rgba(112, 39, 160, 0.3))",
        opacity: 0,
        transform: "translateY(10px)",
        transition: "all 0.6s ease",
    },
    
    "& .dot-1": {
        top: "20px",
        right: "20px",
        animation: "floatDot 3s ease-in-out infinite",
    },
    
    "& .dot-2": {
        top: "50%",
        left: "15px",
        animation: "floatDot 3s ease-in-out infinite 1s",
    },
    
    "& .dot-3": {
        bottom: "30px",
        right: "30px",
        animation: "floatDot 3s ease-in-out infinite 2s",
    },
    
    "@keyframes floatDot": {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-8px)" }
    }
})

/* ---- Brightness overlay ---- */
export const ShimmerOverlaySx = () => ({
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
    transition: "left 0.8s ease",
    zIndex: 1,
    pointerEvents: "none",
    
    "&.shimmer-overlay": {
    }
})


/* ----  Grid container ---- */
export const ServicesGridSx = () => ({
    "& .service-card:nth-of-type(1)": { "--delay": "0.2s" },
    "& .service-card:nth-of-type(2)": { "--delay": "0.35s" },
    "& .service-card:nth-of-type(3)": { "--delay": "0.5s" },
    "& .service-card:nth-of-type(4)": { "--delay": "0.65s" },
    "& .service-card:nth-of-type(5)": { "--delay": "0.8s" },
    "& .service-card:nth-of-type(6)": { "--delay": "0.95s" },
});