/* ---- NavBar Styles ----- */

/*---- Main AppBar ----- */
export const AppBarSx = () => ({
    background: "linear-gradient(90deg, #5A9EF0 50%, #7027A0 100%)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
})

/* ---- Main ToolBar ---- */
export const ToolBarSx = () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff"
})

/* ---- Logo ---- */

export const LogoSx = () => ({
    width: 80,
    height: 70
})

/* ---- Title ---- */

export const Title1Sx = () => ({
    fontFamily: "Nunito",
    fontWeight: 700
})

export const Title2Sx = () => ({
    fontFamily: "Nunito",
    opacity: 0.9
})

/* ---- Nav Button Sx ---- */
export const NavButtonSx = {
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

/* ------ Desktop Links Container ----- */

export const DesktopLinksContainerSx = () => ({
    display: { xs: "none", md: "flex" },
    gap: 2,
    ml: "auto"
})

/* ------ Mobile Links Burguer Menu ----- */

export const MobileBurguerMenuSx = () => ({
    display: { xs: "flex", md: "none" },
    color: "#fff"
})
