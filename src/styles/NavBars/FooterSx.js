/* -------  Footer Styles ------- */

// Root footer container
export const FooterRootSx = {
    position: "relative",
    width: "100%",
    background: "linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)",
    color: "white",
    overflow: "hidden",
    mt: "auto",
};

// Floating decorative top circle
export const TopCircleSx = {
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background:
        "linear-gradient(135deg, rgba(112, 39, 160, 0.1), rgba(55, 129, 227, 0.1))",
    animation: "float 8s ease-in-out infinite",
    zIndex: 1,
};

// Floating decorative bottom circle
export const BottomCircleSx = {
    position: "absolute",
    bottom: "-50px",
    left: "-50px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background:
        "linear-gradient(45deg, rgba(55, 129, 227, 0.08), rgba(112, 39, 160, 0.08))",
    animation: "float 10s ease-in-out infinite reverse",
    zIndex: 1,
};

// Decorative paw prints
export const PawPrintSx = (index) => ({
    position: "absolute",
    fontSize: "20px",
    opacity: 0.05,
    transform: `rotate(${index * 60}deg)`,
    top: `${10 + index * 15}%`,
    right: `${5 + index * 10}%`,
    animation: `pawFloat ${4 + index}s ease-in-out infinite`,
    zIndex: 1,
    "&::before": {
        content: '"🐾"',
    },
});

// Container (main content)
export const FooterContainerSx = {
    position: "relative",
    zIndex: 2,
    py: { xs: 6, md: 8 },
};

// ---- Left column (Company Info) ----
export const CompanyInfoAnimSx = {
    animation: "slideInLeft 0.8s ease-out",
    "@keyframes slideInLeft": {
        "0%": { opacity: 0, transform: "translateX(-50px)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
    },
};

export const LogoBoxSx = {
    width: 60,
    height: 60,
    borderRadius: 3,
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    "&:hover": {
        transform: "scale(1.1)",
        transition: "transform 0.3s ease",
    },
};

export const ClinicNameSx = {
    fontWeight: 700,
    fontFamily: "Nunito",
    background: "linear-gradient(135deg, #3781E3, #7027A0)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
};

export const ClinicSubtitleSx = {
    color: "rgba(255,255,255,0.7)",
    fontFamily: "Nunito",
};

export const CompanyDescSx = {
    color: "rgba(255,255,255,0.8)",
    lineHeight: 1.7,
    fontFamily: "Nunito",
    mb: 3,
};

// Social media buttons
export const SocialButtonSx = (color, index) => ({
    width: 45,
    height: 45,
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    transition: "all 0.3s ease",
    animation: `socialFloat ${3 + index * 0.5}s ease-in-out infinite`,
    "&:hover": {
        background: color,
        transform: "translateY(-5px) scale(1.1)",
        boxShadow: `0 10px 20px ${color}40`,
    },
});

// ---- Middle column (Contact Info) ----
export const ContactInfoAnimSx = {
    animation: "slideInUp 0.8s ease-out 0.2s both",
    "@keyframes slideInUp": {
        "0%": { opacity: 0, transform: "translateY(50px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
    },
};

export const SectionTitleSx = {
    fontWeight: 700,
    fontFamily: "Nunito",
    mb: 3,
    color: "white",
    position: "relative",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-8px",
        left: 0,
        width: "50px",
        height: "3px",
        background: "linear-gradient(90deg, #3781E3, #7027A0)",
        borderRadius: "2px",
    },
};

export const ContactCardSx = (color) => ({
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    p: 2,
    borderRadius: 3,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
        background: "rgba(255,255,255,0.1)",
        transform: "translateX(10px)",
        borderColor: color + "40",
    },
});

export const ContactIconSx = (color) => ({
    color: color,
    mt: 0.2,
    p: 1,
    borderRadius: 2,
    background: `${color}20`,
});

export const ContactTitleSx = {
    fontWeight: 600,
    color: "white",
    mb: 0.5,
    fontFamily: "Nunito",
};

export const ContactTextSx = {
    color: "rgba(255,255,255,0.7)",
    whiteSpace: "pre-line",
    lineHeight: 1.5,
    fontFamily: "Nunito",
};

// ---- Right column (Services) ----
export const ServicesAnimSx = {
    animation: "slideInRight 0.8s ease-out 0.4s both",
    "@keyframes slideInRight": {
        "0%": { opacity: 0, transform: "translateX(50px)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
    },
};

export const ServiceLinkSx = {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    fontFamily: "Nunito",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    gap: 1,
    py: 0.5,
    px: 1,
    borderRadius: 2,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        color: "#3781E3",
        background: "rgba(55, 129, 227, 0.1)",
        transform: "translateX(5px)",
        "&::before": { transform: "translateX(5px)" },
    },
    "&::before": {
        content: '"🐾"',
        fontSize: "12px",
        transition: "transform 0.3s ease",
    },
};

// Divider
export const DividerSx = {
    my: 4,
    background:
        "linear-gradient(90deg, transparent, rgba(55, 129, 227, 0.5), transparent)",
    height: "2px",
    border: "none",
    animation: "dividerGlow 3s ease-in-out infinite",
    "@keyframes dividerGlow": {
        "0%, 100%": { opacity: 0.3 },
        "50%": { opacity: 0.8 },
    },
};

// Bottom section
export const BottomSectionSx = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
    animation: "fadeIn 1s ease-out 0.8s both",
    "@keyframes fadeIn": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
    },
};

export const BottomTextSx = {
    color: "rgba(255,255,255,0.6)",
    textAlign: { xs: "center", md: "left" },
    fontFamily: "Nunito",
};

export const MadeWithBoxSx = {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "rgba(255,255,255,0.7)",
    fontFamily: "Nunito",
};

export const HeartIconSx = {
    color: "#ff6b6b",
    fontSize: 16,
    animation: "heartbeat 1.5s ease-in-out infinite",
    "@keyframes heartbeat": {
        "0%, 50%, 100%": { transform: "scale(1)" },
        "25%, 75%": { transform: "scale(1.1)" },
    },
};

export const PawIconSx = {
    color: "#3781E3",
    fontSize: 18,
    ml: 1,
};
