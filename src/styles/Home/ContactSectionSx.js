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
