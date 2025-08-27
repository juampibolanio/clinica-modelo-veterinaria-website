export const navButtonSx = {
    position: "relative",
    textTransform: "none",
    fontWeight: 500,
    fontSize: 16,
    padding: 1.5,
    color: "primary.main",
    disableRipple: true,
    disableElevation: true,
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 2,
        width: 0,
        backgroundColor: "background.default",
        transition: "width 0.3s ease",
    },
    "&:hover::after": {
        width: "100%",
    },
};
