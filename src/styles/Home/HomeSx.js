/* --------------- Main Home Container ---------- */

export const MainHomeContainerSx = () => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden', 
})

/* ---- Gradient line  ---- */
export const SectionLineSx = () => ({
    width: 80,
    height: 4,
    background: "linear-gradient(90deg, #7027A0, #3781E3)",
    mb: 3,
    borderRadius: 2,
    boxShadow: "0 2px 8px rgba(112, 39, 160, 0.3)",
    animation: "lineSlide 0.6s ease-out 0.6s both",

    "@keyframes lineSlide": {
        "0%": { opacity: 0, width: 0 },
        "100%": { opacity: 1, width: "80px" }
    }
})