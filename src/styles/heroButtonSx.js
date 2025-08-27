export const heroButtonSx = {
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
};
