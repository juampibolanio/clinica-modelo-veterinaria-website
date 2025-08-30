/* ----------- Team Card Styles ------------ */

export const card = (index = 0) => ({
    borderRadius: 6,
    textAlign: "center",
    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: { xs: 280, md: 300 },
    height: { xs: 320, md: 360 },
    position: "relative",
    overflow: "hidden",
    animation: `teamCardEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.15}s both`,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
        transform: "translateY(-15px) scale(1.03)",
        boxShadow: "0 25px 50px rgba(112,39,160,0.25)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 100%)",
        "& .team-avatar": {
            transform: "scale(1.08)",
            filter: "brightness(1.1) contrast(1.05)",
            boxShadow: "0 8px 25px rgba(55, 129, 227, 0.4)",
        },
        "& .gradient-strip": {
            background: "linear-gradient(90deg, #3781E3, #7027A0, #3781E3)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s ease-in-out infinite",
        },
        "& .secondary-bar": {
            width: "70px",
            boxShadow: "0 2px 8px rgba(112, 39, 160, 0.3)",
        },
        "& .floating-elements": {
            opacity: 1,
            transform: "translateY(0)",
        }
    },
    "@keyframes teamCardEntrance": {
        "0%": { opacity: 0, transform: "translateY(50px) rotateX(15deg)", filter: "blur(10px)" },
        "100%": { opacity: 1, transform: "translateY(0) rotateX(0deg)", filter: "blur(0px)" }
    },
    "@keyframes shimmer": {
        "0%": { backgroundPosition: "200% 0" },
        "100%": { backgroundPosition: "-200% 0" }
    },
    "@keyframes float": {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-8px)" }
    }
});

export const floatingElements = {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "linear-gradient(45deg, rgba(55, 129, 227, 0.1), rgba(112, 39, 160, 0.1))",
    opacity: 0,
    transform: "translateY(-10px)",
    transition: "all 0.4s ease",
    animation: "float 3s ease-in-out infinite",
    "&::before": {
        content: '"🐾"',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "16px",
    }
};

export const gradientStrip = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 6,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    background: "linear-gradient(90deg, #3781E3, #7027A0)",
    transition: "all 0.4s ease",
    "&::after": {
        content: '""',
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        height: 0,
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: "6px solid #7027A0",
        opacity: 0.6,
    }
};

export const brightnessHover = {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
    transition: "left 0.8s ease",
    zIndex: 1,
    ".team-card:hover &": { left: "100%" }
};

export const avatarWrapper = {
    position: "relative",
    display: "inline-block",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "-8px",
        left: "-8px",
        right: "-8px",
        bottom: "-8px",
        borderRadius: "50%",
        background: "linear-gradient(45deg, rgba(55, 129, 227, 0.2), rgba(112, 39, 160, 0.2))",
        animation: "pulse 2s ease-in-out infinite",
        zIndex: -1,
    },
    "@keyframes pulse": {
        "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
        "50%": { opacity: 0.8, transform: "scale(1.05)" }
    }
};

export const avatar = {
    width: { xs: 100, md: 120 },
    height: { xs: 100, md: 120 },
    mx: "auto",
    border: "4px solid transparent",
    background: "linear-gradient(white, white) padding-box, linear-gradient(45deg, #3781E3, #7027A0) border-box",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    zIndex: 2,
    "&::after": {
        content: '""',
        position: "absolute",
        top: "10%",
        left: "10%",
        right: "10%",
        bottom: "10%",
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent 70%)",
        pointerEvents: "none",
    }
};

export const nameTypography = {
    background: "linear-gradient(135deg, #7027A0, #3781E3)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    mb: 1.5,
    fontSize: { xs: "1.1rem", md: "1.25rem" },
    fontFamily: "Nunito",
    position: "relative",
    filter: "drop-shadow(0 2px 4px rgba(112, 39, 160, 0.1))",
};

export const secondaryBar = {
    width: "50px",
    height: 3,
    background: "linear-gradient(90deg, #3781E3, #7027A0)",
    mx: "auto",
    borderRadius: 3,
    mb: 2,
    transition: "all 0.4s ease",
    boxShadow: "0 2px 4px rgba(55, 129, 227, 0.2)",
};

export const specialtyTypography = {
    color: "text.primary",
    fontWeight: 600,
    mb: 1,
    fontSize: { xs: "0.95rem", md: "1rem" },
    fontFamily: "Nunito",
};

export const licenseTypography = {
    color: "text.secondary",
    fontSize: { xs: "0.85rem", md: "0.9rem" },
    fontFamily: "Nunito",
    opacity: 0.8,
    lineHeight: 1.4,
    background: "rgba(112, 39, 160, 0.05)",
    px: 2,
    py: 0.5,
    borderRadius: 2,
    border: "1px solid rgba(112, 39, 160, 0.1)",
    display: "inline-block",
};

export const bottomDecoration = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, transparent, rgba(112, 39, 160, 0.3), transparent)",
};
