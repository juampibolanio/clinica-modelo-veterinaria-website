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
  TeamHeaderSx,
  TeamTextColumnSx,
  TeamGridSx,
  PlaceholderImageSx,
  TeamGradientSx,
  TeamTextTitleSx,
  TeamTextDescriptionSx,
  MainHomeContainerSx,
  TeamSectionSx,
  ContactSectionSx,
  ContactCircleTopRightSx,
  ContactCircleBottomLeftSx,
  ContactPawPrintSx,
  ContactHeaderSx,
  ContactHeaderTitleSx,
  ContactHeaderDescriptionSx,
  ContactMainContentSx,
  ContactInfoListSx,
  ContactIconBoxSx,
  ContactInfoCardSx,
  ContactMapSectionSx,
  ContactMapBoxSx,
  ContactMapLoadingSx,
  ContactMapOverlaySx,
  ContactFabSx,
  ContactGoogleMapsButtonSx
} from '../styles/Home/HomeSx';
import { ServicesGridSx } from '../styles/Home/ServiceCardSx';
import { contactInformation } from '../data/contactInformation';

function Home() {
  const theme = useTheme();

  return (
    <>
      {/*--- Hero ---*/}
      <Hero />

      <Box id="inicio" sx={MainHomeContainerSx}>
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

            <Typography variant="body1" sx={DescriptionServicesSx()}>
              Brindamos servicios de alta calidad para cuidar y proteger a tus
              mascotas. Nuestro equipo profesional asegura atención
              personalizada para cada necesidad.
            </Typography>

            <Grid container spacing={2} justifyContent="center" sx={ServicesGridSx}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Grid item xs={12} sm={6} key={service.title}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={<IconComponent />}
                      index={index}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>

        {/*----- Veterinary Team Section -----*/}
        <Box id="equipo" sx={TeamSectionSx}>
          {/* Gradient superior/inferior */}
          <Box sx={TeamGradientSx(theme)} />

          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 4, width: '100%' }}>
            {/* Header: Text + Logo */}
            <Box sx={TeamHeaderSx()}>
              {/* Left Column: Text */}
              <Box sx={TeamTextColumnSx()}>
                <Typography variant="h4" sx={TeamTextTitleSx}>
                  Nuestro Equipo Veterinario
                </Typography>

                <Box sx={SectionLineSx()} />

                <Typography variant="body1" sx={TeamTextDescriptionSx}>
                  Contamos con profesionales altamente capacitados en distintas
                  especialidades, brindando atención integral y de excelencia para el
                  cuidado de tus mascotas.
                </Typography>
              </Box>

              {/* Right Column: Logo */}
              <Box
                component="img"
                src={logo}
                alt="Logo de la clínica"
                sx={{ ...PlaceholderImageSx(), objectFit: 'cover' }}
              />
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
                    index={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        {/*----- End Veterinary Team Section -----*/}

        {/*----- Veterinary Contact Section -----*/}
        <Box id="contacto" sx={ContactSectionSx}>
          {/* Decorative Background Elements */}
          <Box sx={ContactCircleTopRightSx} />
          <Box sx={ContactCircleBottomLeftSx} />

          {/* Paw Print Decorations */}
          {[...Array(4)].map((_, index) => (
            <Box key={index} sx={ContactPawPrintSx} />
          ))}

          {/* Content Container */}
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            {/* Header Section */}
            <Box sx={ContactHeaderSx}>
              <Typography variant="h3" sx={ContactHeaderTitleSx}>
                Contactanos
              </Typography>

              <Typography sx={ContactHeaderDescriptionSx}>
                Estamos aquí para ayudarte. Comunicate con nosotros por cualquiera
                de estos medios o visitanos en nuestra clínica veterinaria.
              </Typography>
            </Box>

            {/* Main Content Grid */}
            <Box sx={ContactMainContentSx}>
              {/* Contact Information Cards */}
              <Box sx={ContactInfoListSx}>
                {contactInformation.map((item, index) => {
                  const Icon = item.icon; 
                  return (
                    <Box
                      key={index}
                      sx={ContactInfoCardSx(item.color, item.delay)}
                    >
                      <Box
                        className="contact-icon"
                        sx={ContactIconBoxSx(item.color)}
                      >
                        <Icon /> 
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            mb: 1,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'text.secondary',
                            whiteSpace: 'pre-line',
                            lineHeight: 1.6,
                            fontSize: { xs: '0.95rem', md: '1rem' },
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}

                {/* Button see in google maps (for the button position) */}
                <Box
                  sx={{
                    mt: 2,
                    p: 3,
                    borderRadius: 3,
                  }}
                ></Box>
              </Box>

              {/* Map Section */}
              <Box sx={ContactMapSectionSx}>
                <Box sx={ContactMapBoxSx}>
                  {/* Map Loading Placeholder */}
                  <Box sx={ContactMapLoadingSx}>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Cargando mapa...
                    </Typography>
                  </Box>

                  <iframe
                    title="Ubicación Veterinaria Modelo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.4899346493554!2d-59.00065067031256!3d-27.47176612244084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cbd55ea75a7%3A0x8883f7bd888f4a10!2sVeterinaria%20Cl%C3%ADnica%20Modelo!5e0!3m2!1ses-419!2sar!4v1756475370113!5m2!1ses-419!2sar"
                    width="100%"
                    height="100%"
                    style={{
                      border: 'none',
                      position: 'relative',
                      zIndex: 2,
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Map Overlay Info */}
                  <Box sx={ContactMapOverlaySx}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: 'primary.main' }}
                    >
                      📍 Veterinaria Clínica Modelo
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mt: 0.5 }}
                    >
                      Av. San Martín 2055, Resistencia, Chaco
                    </Typography>
                  </Box>
                </Box>

                {/* Floating Action Button */}
                <Box sx={ContactFabSx}>
                  <Box
                    component="a"
                    href="https://maps.google.com/?q=Veterinaria+Clínica+Modelo,+Av.+San+Martín+2055,+Resistencia"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={ContactGoogleMapsButtonSx}
                  >
                    🗺️ Ver en Google Maps
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/*----- End Veterinary Contact Section -----*/}
        
      </Box>
    </>
  );
}
export default Home;
