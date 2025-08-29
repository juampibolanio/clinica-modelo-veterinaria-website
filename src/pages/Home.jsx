import { Box, Typography, Grid, useTheme } from '@mui/material';
import ServiceCard from '../components/Home/ServiceCard';
import Hero from '../components/Home/Hero';
import { services } from '../data/services';
import { teamMembers } from '../data/teamMembers';

import dog1 from '../assets/home/hero2.jpg';
import dog2 from '../assets/home/hero3.jpg';
import dog3 from '../assets/home/hero5.jpg';
import dog4 from '../assets/home/hero.png';
import dog5 from '../assets/home/hero8.jpg';
import logo from '../assets/favicon.png';

import TeamCard from '../components/Home/TeamCard';

import {
  ServicesContainerSx,
  CollagePhotosSx,
  PhotoCollageSx,
  ServicesCardsSx,
  TitleServicesSx,
  DescriptionServicesSx,
  SectionLineSx,
  TeamSectionSx,
  TeamHeaderSx,
  TeamTextColumnSx,
  TeamGridSx,
  PlaceholderImageSx,
  TeamBackgroundSx,
  TeamOverlaySx,
  TeamGradientSx
} from '../styles/Home/HomeSx';

function Home() {

  const theme = useTheme();

  return (
    <>
      {/*--- Hero ---*/}
      <Hero />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/*----- Services Section ----*/}
        <Box id="servicios" sx={ServicesContainerSx()}>
          {/* Collage Photos */}
          <Box sx={CollagePhotosSx()}>
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

          {/* Services Cards */}
          <Box sx={ServicesCardsSx()}>
            <Typography variant="h2" sx={TitleServicesSx()}>
              Nuestros Servicios
            </Typography>

            <Box sx={SectionLineSx()} />

            <Typography variant="body1" sx={DescriptionServicesSx()}>
              Brindamos servicios de alta calidad para cuidar y proteger a tus mascotas. Nuestro equipo profesional asegura atención personalizada para cada necesidad.
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Grid item xs={12} sm={6} key={service.title}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={<IconComponent />}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>

        {/*----- Veterinary Team Section -----*/}
        <Box id="equipo" sx={TeamSectionSx()}>
          {/* Background Image */}
          <Box sx={TeamBackgroundSx(dog3)} />

          {/* Overlay color */}
          <Box sx={TeamOverlaySx()} />

          {/* Gradient tipo Hero */}
          <Box sx={TeamGradientSx(theme)} />
          <Box sx={TeamGradientSx(theme)} />

          {/* Content */}
          <Box sx={{ position: "relative", zIndex: 4, width: "100%" }}>
            {/* Header: Texto + Logo */}
            <Box sx={TeamHeaderSx()}>
              {/* Left Column: Text */}
              <Box sx={TeamTextColumnSx()}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontFamily: "Nunito",
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                    color: "background.default"
                  }}
                >
                  Nuestro Equipo Veterinario
                </Typography>

                <Box
                  sx={{
                    background: "linear-gradient(90deg, #7027A0, #3781E3)",
                    mb: 2,
                    borderRadius: 2,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.6,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    color: "background.default",
                  }}
                >
                  Contamos con profesionales altamente capacitados en distintas especialidades, brindando atención integral y de excelencia para el cuidado de tus mascotas.
                </Typography>
              </Box>

              {/* Right Column: Logo */}
              <Box component="img" src={logo} alt="Logo de la clínica" sx={{ ...PlaceholderImageSx(), objectFit: "cover" }} />
            </Box>

            {/* Team Cards */}
            <Grid container spacing={6} sx={TeamGridSx()}>
              {teamMembers.slice(0, 6).map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <TeamCard
                    name={member.name}
                    surname={member.surname}
                    photo={member.photo}
                    specialty={member.specialty}
                    license={member.license}
                    theme={theme}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>


      </Box>
    </>
  );
}

export default Home;