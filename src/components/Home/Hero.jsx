import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { heroButtonSx } from "../../styles/heroButtonSx";
import heroImage from "../../assets/home/hero1.jpg";
import logoImage from "../../assets/home/perro.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <Box
            sx={{
                width: "100%",
                height: "calc(100vh - 120px)",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 3, md: 10 },
                color: "#fff",
            }}
        >
            {/*-------------------------------- Imagen de fondo --------------------------------*/}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 1,
                }}
            />

            {/* Overlay negro */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: 2,
                }}
            />

            {/*-------------------------------- Gradiente --------------------------------*/}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `
            linear-gradient(
              to bottom,
              ${theme.palette.background.default} 0%,
              rgba(230,247,255,0) 0%,
              rgba(230,247,255,0) 100%,
              ${theme.palette.background.default} 100%
            )
          `,
                    zIndex: 3,
                }}
            />

            {/*-------------------------------- Contenido --------------------------------*/}
            <Box sx={{ position: "relative", zIndex: 4, maxWidth: 700 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 5 }}>
                    <Box
                        sx={{
                            width: { xs: 85, md: 140 },
                            height: { xs: 85, md: 140 },
                            borderRadius: "50%",
                            background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.background.default})`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexShrink: 0,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        }}
                    >
                        <Box
                            component="img"
                            src={logoImage}
                            alt="Logo"
                            sx={{ width: { xs: 85, md: 140 }, height: "auto" }}
                        />
                    </Box>

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "2rem", md: "3.8rem" },
                            position: "relative",
                            display: "inline-block",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                bottom: -8,
                                height: 4,
                                width: { xs: 40, md: 90 },
                                backgroundColor: theme.palette.primary.light,
                                borderRadius: 2,
                            },
                        }}
                    >
                        Clínica Modelo Veterinaria
                    </Typography>
                </Box>

                {/*-------------------------------- Subtítulo --------------------------------*/}
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        mb: 4,
                    }}
                >
                    Brindamos atención integral y profesional para tus mascotas,
                    garantizando cuidado de calidad.
                </Typography>

                {/*-------------------------------- Botón --------------------------------*/}
                <Button variant="contained" sx={heroButtonSx}>
                    Conoce Más
                </Button>
            </Box>

            {/*-------------------------------- Flecha --------------------------------*/}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
                    zIndex: 5,
                }}
            >
                <KeyboardArrowDownIcon
                    onClick={scrollToServices}
                    sx={{
                        fontSize: 48,
                        color: theme.palette.primary.light,
                        cursor: "pointer",
                        mb: 1,
                        animation: "bounce 2s infinite",
                        "@keyframes bounce": {
                            "0%, 20%, 50%, 80%, 100%": {
                                transform: "translateY(0)",
                            },
                            "40%": {
                                transform: "translateY(-10px)",
                            },
                            "60%": {
                                transform: "translateY(-5px)",
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    );
}
