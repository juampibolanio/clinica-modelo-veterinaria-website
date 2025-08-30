import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logoImage from "../../assets/home/perro.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    BoxSx,
    ImageBackgroundSx,
    OverlayColorSx,
    GradientSx,
    ContentContainerSx,
    LogoContainerSx,
    TitleSx,
    SubtitleSx,
    ArrowSx,
    ArrowIconSx,

} from "../../styles/Home/HeroSx.js";

export default function Hero() {
    const theme = useTheme();

    const scrollToServices = () => {
        const servicesSection = document.getElementById("servicios");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box sx={BoxSx}>
            {/* Background Image */}
            <Box sx={ImageBackgroundSx} />

            {/* Color Overlay */}
            <Box sx={OverlayColorSx} />

            {/* Gradient Overlay */}
            <Box sx={GradientSx(theme)} />

            {/* Main Content */}
            <Container maxWidth="xl" sx={{ position: "relative", zIndex: 4 }}>
                <Box sx={ContentContainerSx}>
                    {/* Logo Section */}
                    <Box sx={LogoContainerSx(theme)}>
                        <Box
                            component="img"
                            src={logoImage}
                            alt="Clínica Modelo Veterinaria Logo"
                            sx={{
                                width: { xs: 70, sm: 90, md: 120, lg: 140 },
                                height: "auto",
                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
                            }}
                        />
                    </Box>

                    {/* Text Content */}
                    <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xs: "100%", md: "60%" } }}>
                        <Typography variant="h1" sx={TitleSx(theme)}>
                            Clínica Modelo
                            <Box component="span" sx={{ display: "block" }}>
                                Veterinaria
                            </Box>
                        </Typography>

                        <Typography variant="h5" sx={SubtitleSx(theme)}>
                            Cuidado profesional y compasivo para tus mascotas.
                            Brindando salud y bienestar animal.
                        </Typography>

                    </Box>

                </Box>
            </Container>

            {/* Scroll Arrow */}
            <Box sx={ArrowSx(theme)}>
                <KeyboardArrowDownIcon
                    onClick={scrollToServices}
                    sx={ArrowIconSx(theme)}
                />
            </Box>
        </Box>
    );
}