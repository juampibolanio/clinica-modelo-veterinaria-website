/*----------------- Services Styles -----------------*/

/*----- Box 1 - Services Section Container -----*/
export const ServicesContainerSx = () => ({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: 3, sm: 4, md: 6 },
    py: { xs: 6, sm: 8, md: 10 },
    px: { xs: 2, sm: 3, md: 4 },
    minHeight: { xs: "auto", md: "100vh" },
    background: "background.default",
})

/* ---- Box 2 - Collage Photos ---- */
export const CollagePhotosSx = () => ({
    width: { xs: "100%", md: "45%" },
    p: { xs: 1, sm: 2 },
    borderRadius: 4,
    background: "linear-gradient(135deg, rgba(55,129,227,0.1), rgba(112,39,160,0.1))",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gridAutoRows: { xs: 150, sm: 180, md: 200 },
    gap: { xs: 1, sm: 2 },
})

/* ---- Box 3 - Photo Collage ---- */
export const PhotoCollageSx = (index) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 3,
    gridColumn: index === 4 ? { xs: "1 / -1" } : "auto",
})

/* ----- Box 4 - Right Column: Services Cards----- */
export const ServicesCardsSx = () => ({
    width: { xs: "100%", md: "50%" },
    display: "flex",
    flexDirection: "column",
    gap: { xs: 2.5, sm: 3 },
})

/* --- Title --- */
export const TitleServicesSx = () => ({
    fontFamily: "Nunito",
    fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2.5rem" },
    fontWeight: 700,
    color: "primary.main",
})

/* ---- Description ---- */
export const DescriptionServicesSx = () => ({
    fontFamily: "Nunito",
    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
    color: "text.secondary",
    mb: { xs: 1.5, sm: 2 },
})

/* ---- Gradient line  ---- */
export const SectionLineSx = () => ({
    width: 80,
    height: 4,
    background: "linear-gradient(90deg, #7027A0, #3781E3)",
    mb: { xs: 1.5, sm: 2 },
    borderRadius: 2,
})


/*----------------- Veterinary Team Styles -----------------*/

/* ---- Box 5 - Team Section Container ---- */
export const TeamSectionSx = () => ({
    position: "relative",
    py: { xs: 6, sm: 8, md: 12 },
    px: { xs: 2, sm: 3, md: 8 },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: "hidden",
    minHeight: { xs: "auto", md: "100vh" },
});

/* ---- Background Image ---- */
export const TeamBackgroundSx = (image) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 1,
});

/* ---- Overlay color ---- */
export const TeamOverlaySx = () => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(112, 39, 160, 0.40)",
    zIndex: 2,
});

/* ---- Gradient  ---- */
export const TeamGradientSx = (theme) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
      linear-gradient(
        to bottom,
        ${theme.palette.background.default} 0%,
        rgba(255,255,255,0) 5%,
        rgba(255,255,255,0) 95%,
        ${theme.palette.background.default} 100%
      )
    `,
    zIndex: 3,
});

/* ---- Header Row: Text + Image ---- */
export const TeamHeaderSx = () => ({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-start" },
    gap: { xs: 3, sm: 4, md: 6 },
    mb: { xs: 3, sm: 4 },
    position: "relative",
    zIndex: 4,
});

/* ---- Left Column: Text ---- */
export const TeamTextColumnSx = () => ({
    flex: { xs: "unset", md: 2 },
    textAlign: { xs: "center", md: "left" },
});

/* ---- Right Column: Placeholder Image/Logo ---- */
export const PlaceholderImageSx = () => ({
    flex: { xs: "unset", md: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: 120, sm: 150, md: 200 },
    height: { xs: 130, sm: 160, md: 210 },
    borderRadius: 4,
    margin: { xs: "0 auto", md: 0 },
});

/* ---- Team Cards Grid ---- */
export const TeamGridSx = () => ({
    justifyContent: "center",
    width: "100%",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
    gap: { xs: 2, sm: 3, md: 6 },
    position: "relative",
    zIndex: 4,
});
