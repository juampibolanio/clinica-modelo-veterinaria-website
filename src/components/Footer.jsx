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

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        width: "100%",
        background: "linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)",
        color: "white",
        overflow: "hidden",
        mt: "auto",
      }}
    >
      {/* Floating decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(112, 39, 160, 0.1), rgba(55, 129, 227, 0.1))",
          animation: "float 8s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, rgba(55, 129, 227, 0.08), rgba(112, 39, 160, 0.08))",
          animation: "float 10s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />

      {/* Decorative paw prints */}
      {[...Array(6)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            fontSize: "20px",
            opacity: 0.05,
            transform: `rotate(${index * 60}deg)`,
            top: `${10 + index * 15}%`,
            right: `${5 + index * 10}%`,
            animation: `pawFloat ${4 + index}s ease-in-out infinite`,
            zIndex: 1,
            "&::before": {
              content: '"🐾"',
            }
          }}
        />
      ))}

      {/* Main Footer Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 6, md: 8 }
        }}
      >
        {/* Top Section */}
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                animation: "slideInLeft 0.8s ease-out",
                "@keyframes slideInLeft": {
                  "0%": { opacity: 0, transform: "translateX(-50px)" },
                  "100%": { opacity: 1, transform: "translateX(0)" }
                }
              }}
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
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "transform 0.3s ease",
                    }
                  }}
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
                    sx={{
                      fontWeight: 700,
                      fontFamily: "Nunito",
                      background: "linear-gradient(135deg, #3781E3, #7027A0)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    }}
                  >
                    Clínica Modelo Veterinaria
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "Nunito"
                    }}
                  >
                    Cuidando a tus mascotas 
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.7,
                  fontFamily: "Nunito",
                  mb: 3,
                }}
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
                    sx={{
                      width: 45,
                      height: 45,
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "white",
                      transition: "all 0.3s ease",
                      animation: `socialFloat ${3 + index * 0.5}s ease-in-out infinite`,
                      "&:hover": {
                        background: social.color,
                        transform: "translateY(-5px) scale(1.1)",
                        boxShadow: `0 10px 20px ${social.color}40`,
                      }
                    }}
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
              sx={{
                animation: "slideInUp 0.8s ease-out 0.2s both",
                "@keyframes slideInUp": {
                  "0%": { opacity: 0, transform: "translateY(50px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" }
                }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Nunito",
                  mb: 3,
                  color: "white",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "50px",
                    height: "3px",
                    background: "linear-gradient(90deg, #3781E3, #7027A0)",
                    borderRadius: "2px",
                  }
                }}
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
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255,255,255,0.1)",
                        transform: "translateX(10px)",
                        borderColor: item.color + "40",
                      }
                    }}
                  >
                    <Box
                      sx={{
                        color: item.color,
                        mt: 0.2,
                        p: 1,
                        borderRadius: 2,
                        background: `${item.color}20`,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: "white",
                          mb: 0.5,
                          fontFamily: "Nunito"
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          whiteSpace: "pre-line",
                          lineHeight: 1.5,
                          fontFamily: "Nunito"
                        }}
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
              sx={{
                animation: "slideInRight 0.8s ease-out 0.4s both",
                "@keyframes slideInRight": {
                  "0%": { opacity: 0, transform: "translateX(50px)" },
                  "100%": { opacity: 1, transform: "translateX(0)" }
                }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Nunito",
                  mb: 3,
                  color: "white",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "50px",
                    height: "3px",
                    background: "linear-gradient(90deg, #3781E3, #7027A0)",
                    borderRadius: "2px",
                  }
                }}
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
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      fontFamily: "Nunito",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      py: 0.5,
                      px: 1,
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#3781E3",
                        background: "rgba(55, 129, 227, 0.1)",
                        transform: "translateX(5px)",
                        "&::before": {
                          transform: "translateX(5px)",
                        }
                      },
                      "&::before": {
                        content: '"🐾"',
                        fontSize: "12px",
                        transition: "transform 0.3s ease",
                      }
                    }}
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
          sx={{
            my: 4,
            background: "linear-gradient(90deg, transparent, rgba(55, 129, 227, 0.5), transparent)",
            height: "2px",
            border: "none",
            animation: "dividerGlow 3s ease-in-out infinite",
            "@keyframes dividerGlow": {
              "0%, 100%": { opacity: 0.3 },
              "50%": { opacity: 0.8 }
            }
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            animation: "fadeIn 1s ease-out 0.8s both",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 }
            }
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.6)",
              textAlign: { xs: "center", md: "left" },
              fontFamily: "Nunito"
            }}
          >
            © {currentYear} Veterinaria Modelo. Todos los derechos reservados.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Nunito"
            }}
          >
            <Typography variant="body2">
              Hecho con
            </Typography>
            <FavoriteIcon
              sx={{
                color: "#ff6b6b",
                fontSize: 16,
                animation: "heartbeat 1.5s ease-in-out infinite",
                "@keyframes heartbeat": {
                  "0%, 50%, 100%": { transform: "scale(1)" },
                  "25%, 75%": { transform: "scale(1.1)" }
                }
              }}
            />
            <Typography variant="body2">
              para el cuidado animal
            </Typography>
            <PetsIcon
              sx={{
                color: "#3781E3",
                fontSize: 18,
                ml: 1
              }}
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