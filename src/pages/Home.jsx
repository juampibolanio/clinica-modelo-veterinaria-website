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
import { CollagePhotosSx, DescriptionServicesSx, PhotoCollageSx, ServicesCardsSx, ServicesContainerSx, TitleServicesSx } from '../styles/Home/HomeSx';

function Home() {
  const services = [
    { title: "Consultas Veterinarias", description: "Revisiones completas para mantener a tus mascotas saludables y felices.", icon: <LocalHospitalIcon /> },
    { title: "Vacunación y Desparasitación", description: "Protegemos a tus mascotas con vacunas y tratamientos preventivos de calidad.", icon: <HealthAndSafetyIcon /> },
    { title: "Cirugías Especializadas", description: "Contamos con procedimientos quirúrgicos seguros y profesionales.", icon: <PetsIcon /> },
    { title: "Estética y Cuidado", description: "Baños, cortes y cuidados especiales para el bienestar de tus mascotas.", icon: <ContentCutIcon /> },
  ];

  return (
    <>
      {/*--- Hero --- */}
      <Hero />

      {/*----- Services Section Container ----*/}
      <Box id="servicios" sx={ServicesContainerSx}>

        {/* - Collage Photos - */}
        <Box sx={CollagePhotosSx}>
          {/* - Photo Collage - */}
          {[dog1, dog2, dog3, dog4, dog5].map((dog, index) => (
            <Box
              key={index}
              component="img"
              src={dog}
              alt={`Perrito ${index + 1}`}
              sx={PhotoCollageSx(index)}
            />
          ))}
        </Box>

        {/*----- Right Column: Services Cards -----*/}
        <Box sx={ServicesCardsSx}>

          {/* - Title - */}
          <Typography variant="h2" sx={TitleServicesSx}>
            Nuestros Servicios
          </Typography>
          
          {/* - Description - */}
          <Typography variant="body1" sx={DescriptionServicesSx}>
            Brindamos servicios de alta calidad para cuidar y proteger a tus mascotas. Nuestro equipo profesional asegura atención personalizada para cada necesidad.
          </Typography>

          {/* - Services Cards - */}
          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} key={service.title}>
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
      {/*----- End Services Section Container ----*/}


      {/* ----- Veterinary Team Section Container ----- */}
    </>
  );
}

export default Home;
