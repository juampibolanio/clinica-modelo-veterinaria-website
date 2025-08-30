import { Box, Typography, Grid, Container, IconButton, Divider } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from '../assets/favicon.png';
import { BottomCircleSx, BottomSectionSx, BottomTextSx, ClinicNameSx, ClinicSubtitleSx, CompanyDescSx, CompanyInfoAnimSx, ContactCardSx, ContactIconSx, ContactInfoAnimSx, ContactTextSx, ContactTitleSx, DividerSx, FooterContainerSx, FooterRootSx, HeartIconSx, LogoBoxSx, MadeWithBoxSx, PawIconSx, PawPrintSx, SectionTitleSx, ServiceLinkSx, ServicesAnimSx, SocialButtonSx, TopCircleSx } from '../styles/NavBars/FooterSx';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={FooterRootSx}
    >
      {/* Floating decorative elements */}
      <Box
        sx={TopCircleSx}
      />

      <Box
        sx={BottomCircleSx}
      />

      {/* Decorative paw prints */}
      {[...Array(6)].map((_, index) => (
        <Box
          key={index}
          sx={PawPrintSx(index)}
        />
      ))}

      {/* Main Footer Content */}
      <Container
        maxWidth="lg"
        sx={FooterContainerSx}
      >
        {/* Top Section */}
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box
              sx={CompanyInfoAnimSx}
            >
              {/* Logo and Veterinary Name */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                  gap: 2,
                }}
              >
                {/* Logo placeholder  */}
                <Box
                  sx={LogoBoxSx}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="Clínica Modelo Veterinaria Logo"
                    sx={{
                      width: { xs: 70, sm: 90, md: 130, lg: 140 },
                      height: "auto",
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={ClinicNameSx}
                  >
                    Clínica Modelo Veterinaria
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={ClinicSubtitleSx}
                  >
                    Cuidando a tus mascotas 
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={CompanyDescSx}
              >
                Brindamos atención veterinaria integral con los más altos estándares
                de calidad y dedicación. Tu mascota merece el mejor cuidado profesional.
              </Typography>

              {/* Social Media Icons */}
              <Box sx={{ display: "flex", gap: 2 }}>
                {[
                  { icon: <InstagramIcon />, color: "#E4405F", href: "https://www.instagram.com/clinicamodeloveterinaria" },
                  { icon: <WhatsAppIcon />, color: "#25D366", href: "https://wa.me/543624418302" },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={SocialButtonSx(social.color, index)}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Box
              sx={ContactInfoAnimSx}
            >
              <Typography
                variant="h6"
                sx={SectionTitleSx}
              >
                Información de Contacto
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {[
                  {
                    icon: <LocationOnIcon sx={{ fontSize: 20 }} />,
                    title: "Dirección",
                    content: "Av. San Martín 2055\nResistencia, Chaco",
                    color: "#e53e3e"
                  },
                  {
                    icon: <PhoneIcon sx={{ fontSize: 20 }} />,
                    title: "Teléfonos",
                    content: "+54 362-4418302",
                    color: "#38a169"
                  },
                  {
                    icon: <EmailIcon sx={{ fontSize: 20 }} />,
                    title: "Email",
                    content: "nmaurenzig@yahoo.com.ar",
                    color: "#3182ce"
                  },
                  {
                    icon: <AccessTimeIcon sx={{ fontSize: 20 }} />,
                    title: "Horarios",
                    content: "Lun-Sáb: 09:00-12:30 | 17:00-20:00\nDom: Cerrado",
                    color: "#805ad5"
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={ContactCardSx(item.color)}
                  >
                    <Box
                      sx={ContactIconSx(item.color)}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={ContactTitleSx}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={ContactTextSx}
                      >
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Services & Quick Links */}
          <Grid item xs={12} md={4}>
            <Box
              sx={ServicesAnimSx}
            >
              <Typography
                variant="h6"
                sx={SectionTitleSx}
              >
                Nuestros Servicios
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  "Consulta Veterinaria General",
                  "Cirugías y Procedimientos",
                  "Vacunación y Desparasitación",
                  "Análisis Clínicos",
                  "Asesoramiento Nutricional"
                ].map((service, index) => (
                  <Typography
                    key={index}
                    component="a"
                    href="#servicios"
                    sx={ServiceLinkSx}
                  >
                    {service}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider with animation */}
        <Divider
          sx={DividerSx}
        />

        {/* Bottom Section */}
        <Box
          sx={BottomSectionSx}
        >
          <Typography
            variant="body2"
            sx={BottomTextSx}
          >
            © {currentYear} Veterinaria Modelo. Todos los derechos reservados.
          </Typography>

          <Box
            sx={MadeWithBoxSx}
          >
            <Typography variant="body2">
              Hecho con
            </Typography>
            <FavoriteIcon
              sx={HeartIconSx}
            />
            <Typography variant="body2">
              para el cuidado animal
            </Typography>
            <PetsIcon
              sx={PawIconSx}
            />
          </Box>
        </Box>
      </Container>

      {/* Global Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes pawFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes logoSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes socialFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </Box>
  );
}

export default Footer;