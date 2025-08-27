export const heroButtonSx = {
    position: "relative",
    textTransform: "none",
    fontWeight: 600,
    fontSize: 16,
    px: 4,
    py: 1.5,
    color: "secondary.main",
    border: "2px solid",
    borderColor: "secondary.main",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 3,
        width: 0,
        backgroundColor: "secondary.main",
        transition: "width 0.3s ease",
    },
    "&:hover::after": {
        width: "100%",
    },
};
// pendiente: hacer la seccion de servicios.