
/*----------------- Services Styles ----------------- */

/*----- Box 1 - Services Section Container -----*/

export const ServicesContainerSx = () => ({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "flex-start",
    justifyContent: "center",
    gap: { xs: 4, md: 6 },
    py: { xs: 8, md: 12 },
    px: { xs: 2, md: 4 },
    background: "background.default",
})

/* ---- Box 2 - Collage Photos */

export const CollagePhotosSx = () => ({
    width: { xs: "100%", md: "45%" },
    p: 2,
    borderRadius: 4,
    background: "linear-gradient(135deg, rgba(55,129,227,0.1), rgba(112,39,160,0.1))",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gridAutoRows: { xs: "200px", sm: "180px", md: "200px" },
    gap: 2,
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
    gap: 3
})

// --- Title ---

export const TitleServicesSx = () => ({
    fontFamily: "Nunito",
    fontSize: { xs: "1.8rem", md: "2.5rem" },
    fontWeight: 700,
    color: "primary.main",
})

// ----Description ----

export const DescriptionServicesSx = () => ({
    fontFamily: "Nunito",
    fontSize: { xs: "0.9rem", md: "1rem" },
    color: "primary.light",
    mb: 2,
})


/*----------------- Veterinary Team Styles ----------------- */

