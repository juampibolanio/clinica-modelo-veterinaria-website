import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logoImage from "../../assets/home/perro.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BoxSx, ImageBackgroundSx, OverlayColorSx, GradientSx, ContentSectionSx, TitleSx, SubtitleSx, ArrowSx, ArrowIconSx, HeroButtonSx } from "../../styles/Home/HeroSx.js";

export default function Hero() {
    const theme = useTheme();

    /* Scroll */
    const scrollToServices = () => {
        const servicesSection = document.getElementById("servicios");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box sx={BoxSx}>
            {/*---- Background Image -----*/}
            <Box sx={ImageBackgroundSx}/>

            {/* ---- Black Overlay ---- */}
            <Box sx={OverlayColorSx}/>

            {/*-----Gradient -----*/}
            <Box sx={GradientSx(theme)}/>

            {/*---- Content ----*/}
            <Box sx={{ position: "relative", zIndex: 4, maxWidth: 700 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 5 }}>
                    <Box sx={ContentSectionSx(theme)}>
                        {/* --- Logo ---- */}
                        <Box component="img"
                            src={logoImage}
                            alt="Logo"
                            sx={{ width: { xs: 85, md: 140 }, height: "auto" }}
                        />
                    </Box>

                    {/* ---- Title ---- */}
                    <Typography variant="h2" sx={TitleSx(theme)}>
                        Clínica Modelo Veterinaria
                    </Typography>
                </Box>

                {/*----- Subtitle ----*/}
                <Typography variant="subtitle1" sx={SubtitleSx}>
                    Brindamos atención integral y profesional para tus mascotas,
                    garantizando cuidado de calidad.
                </Typography>

                {/*---- Button ----*/}
                <Button variant="contained" sx={HeroButtonSx}>
                    Conoce Más
                </Button>
            </Box>

            {/*---- Arrow ----*/}
            <Box sx={ArrowSx(theme)}>
                <KeyboardArrowDownIcon onClick={scrollToServices} sx={ArrowIconSx(theme)} />
            </Box>
        </Box>
    );
}