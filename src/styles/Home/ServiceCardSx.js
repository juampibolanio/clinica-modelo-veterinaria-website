/* ---- Card ---- */
export const CardSx = () => ({
    maxWidth: 340,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "background.paper",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    overflow: "hidden",
    borderTop: "6px solid",
    borderImage: "linear-gradient(90deg, #3781E3, #7027A0) 1",
})

/* ---- Box 1 - Container ---- */

export const ContentBoxSx = () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 3,
    textAlign: "center",
});

/* ---- Box 2 - Content ---- */

// Icon
export const IconSx = () => ({
    mb: 2,
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3781E3, #7027A0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 32,
})

// Title
export const TitleSx = () => ({
    fontWeight: 700,
    mb: 1,
    fontFamily: "Nunito",
    color: "primary.main",
})

// Description

export const DescriptionSx = () => ({
    fontFamily: "Nunito",
    color: "text.secondary",
    lineHeight: 1.5,
})