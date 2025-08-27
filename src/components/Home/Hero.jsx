import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/home/hero.png";
import { heroButtonSx } from "../../styles/heroButtonSx";

export default function Hero() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: "center",
                justifyContent: "space-around",
                minHeight: "80vh",
                px: { xs: 4, md: 12 },
                py: { xs: 6, md: 0 },
                backgroundColor: "background.default",
                position: "relative",
                gap: { xs: 4, md: 10 }
            }}
        >
            {/* Texto */}
            <Box sx={{ maxWidth: 600, textAlign: { xs: "center", md: "left" } }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "Nunito",
                        fontWeight: 700,
                        mb: 3,
                        background: "linear-gradient(90deg, #3781E3, #7027a0)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Clínica Modelo Veterinaria
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: "Nunito",
                        fontWeight: 400,
                        mb: 4,
                        color: "secondary.main",
                        textAlign: { xs: "center", md: "left" },
                        lineHeight: 1.6,
                    }}
                >
                    Precisión y cuidado en la salud de tu mascota.
                    Servicios especializados para asegurar un diagnóstico confiable y una atención integral.
                </Typography>

                {/* Botones */}
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        sx={heroButtonSx}
                    >
                        Nuestros servicios
                    </Button>

                    <Button
                        variant="outlined"
                        color="primary"
                        sx={heroButtonSx}
                    >
                        Contacto
                    </Button>
                </Box>
            </Box>

            {/* Imagen */}
            <Box
                component="img"
                src={logo}
                alt="Clínica Modelo"
                sx={{
                    width: { xs: "80%", md: "45%" },
                    mb: { xs: 3, md: 0 },
                    borderRadius: 4,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
                    },
                }}
            />
        </Box>
    );
}
