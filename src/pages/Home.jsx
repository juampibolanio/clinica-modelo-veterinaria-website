import { Box, Typography, Grid } from '@mui/material';
import ServiceCard from '../components/Home/ServiceCard';
import Hero from '../components/Home/Hero';

import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ContentCutIcon from '@mui/icons-material/ContentCut';

import dog1 from '../assets/home/hero2.jpg';
import dog2 from '../assets/home/hero3.jpg';
import dog3 from '../assets/home/hero5.jpg';
import dog4 from '../assets/home/hero.png';
import dog5 from '../assets/home/hero8.jpg';

function Home() {
  const services = [
    { title: "Consultas Veterinarias", description: "Revisiones completas para mantener a tus mascotas saludables y felices.", icon: <LocalHospitalIcon /> },
    { title: "Vacunación y Desparasitación", description: "Protegemos a tus mascotas con vacunas y tratamientos preventivos de calidad.", icon: <HealthAndSafetyIcon /> },
    { title: "Cirugías Especializadas", description: "Contamos con procedimientos quirúrgicos seguros y profesionales.", icon: <PetsIcon /> },
    { title: "Estética y Cuidado", description: "Baños, cortes y cuidados especiales para el bienestar de tus mascotas.", icon: <ContentCutIcon /> },
  ];

  return (
    <>
      <Hero />

      {/*-------------------------------- Sección de Servicios --------------------------------*/}
      <Box
        id="servicios"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 4 },
          background: "background.default",
        }}
      >
        {/*-------------------------------- Collage fotos --------------------------------*/}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            p: 2,
            borderRadius: 4,
            background: "linear-gradient(135deg, rgba(55,129,227,0.1), rgba(112,39,160,0.1))",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, 
            gridAutoRows: { xs: "200px", sm: "180px", md: "200px" },
            gap: 2,
          }}
        >
          {[dog1, dog2, dog3, dog4, dog5].map((dog, index) => (
            <Box
              key={index}
              component="img"
              src={dog}
              alt={`Perrito ${index + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 3,
                gridColumn: index === 4 ? { xs: "1 / -1" } : "auto", 
              }}
            />
          ))}
        </Box>

        {/*-------------------------------- Columna derecha: Cards de servicios --------------------------------*/}
        <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Nunito",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito",
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "primary.light",
              mb: 2,
            }}
          >
            Brindamos servicios de alta calidad para cuidar y proteger a tus mascotas. Nuestro equipo profesional asegura atención personalizada para cada necesidad.
          </Typography>

          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} key={service.title}>
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Home;
