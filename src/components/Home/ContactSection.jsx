import { Box, Typography } from '@mui/material';
import { contactInformation } from '../../data/contactInformation';
import { ContactSectionSx, ContactCircleTopRightSx, ContactCircleBottomLeftSx, ContactPawPrintSx, ContactHeaderSx, ContactHeaderTitleSx, ContactHeaderDescriptionSx, ContactMainContentSx, ContactInfoListSx, ContactInfoCardSx, ContactIconBoxSx, ContactMapSectionSx, ContactMapBoxSx, ContactMapLoadingSx, ContactMapOverlaySx, ContactFabSx, ContactGoogleMapsButtonSx } from '../../styles/Home/ContactSectionSx';

export default function ContactSection() {
    return (
        <Box id="contacto" sx={ContactSectionSx()}>
            <Box sx={ContactCircleTopRightSx()} />
            <Box sx={ContactCircleBottomLeftSx()} />

            {[...Array(4)].map((_, index) => <Box key={index} sx={ContactPawPrintSx(index)} />)}

            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={ContactHeaderSx()}>
                    <Typography variant="h3" sx={ContactHeaderTitleSx()}>Contáctanos</Typography>
                    <Typography sx={ContactHeaderDescriptionSx()}>
                        Estamos aquí para ayudarte. Comunicate con nosotros por cualquiera de estos medios o visitanos en nuestra clínica veterinaria.
                    </Typography>
                </Box>

                <Box sx={ContactMainContentSx()}>
                    <Box sx={ContactInfoListSx()}>
                        {contactInformation.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Box key={index} sx={ContactInfoCardSx(item.color, item.delay)}>
                                    <Box sx={ContactIconBoxSx(item.color)}><Icon /></Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>{item.title}</Typography>
                                        <Typography sx={{ color: 'text.secondary', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.description}</Typography>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>

                    <Box sx={ContactMapSectionSx()}>
                        <Box sx={ContactMapBoxSx()}>
                            <Box sx={ContactMapLoadingSx()}>
                                <Typography sx={{ color: 'text.secondary' }}>Cargando mapa...</Typography>
                            </Box>
                            <iframe
                                title="Ubicación Veterinaria Modelo"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.4899346493554!2d-59.00065067031256!3d-27.47176612244084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cbd55ea75a7%3A0x8883f7bd888f4a10!2sVeterinaria%20Cl%C3%ADnica%20Modelo!5e0!3m2!1ses-419!2sar!4v1756475370113!5m2!1ses-419!2sar"
                                width="100%" height="100%" style={{ border: 'none', position: 'relative', zIndex: 2 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            />
                            <Box sx={ContactMapOverlaySx()}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'primary.main' }}>📍 Veterinaria Clínica Modelo</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>Av. San Martín 2055, Resistencia, Chaco</Typography>
                            </Box>
                        </Box>
                        <Box sx={ContactFabSx()}>
                            <Box component="a" href="https://maps.google.com/?q=Veterinaria+Clínica+Modelo,+Av.+San+Martín+2055,+Resistencia" target="_blank" rel="noopener noreferrer" sx={ContactGoogleMapsButtonSx()}>🗺️ Ver en Google Maps</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}