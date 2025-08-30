import { Box, Typography, Grid } from '@mui/material';
import { ServicesContainerSx, CollagePhotosSx, PhotoCollageSx, ServicesCardsSx, TitleServicesSx, DescriptionServicesSx } from '../../styles/Home/ServicesSectionSx';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

import dog1 from '../../assets/home/hero2.jpg';
import dog2 from '../../assets/home/hero3.jpg';
import dog3 from '../../assets/home/hero5.jpg';
import dog4 from '../../assets/home/hero.jpg';
import dog5 from '../../assets/home/hero8.jpg';

export default function ServicesSection() {
    return (
        <Box id="servicios" sx={ServicesContainerSx()}>
            {/* Photo collage */}
            <Box sx={CollagePhotosSx()}>
                {[dog1, dog2, dog3, dog4, dog5].map((dog, index) => (
                    <Box key={index} component="img" src={dog} alt={`Perrito ${index + 1}`} sx={PhotoCollageSx(index)} />
                ))}
            </Box>

            {/* Services Cards */}
            <Box sx={ServicesCardsSx()}>
                <Typography variant="h2" sx={TitleServicesSx()}>Nuestros Servicios</Typography>
                <Typography variant="body1" sx={DescriptionServicesSx()}>
                    Brindamos servicios de alta calidad para cuidar y proteger a tus mascotas.
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Grid item xs={12} sm={6} key={service.title}>
                                <ServiceCard title={service.title} description={service.description} icon={<IconComponent />} index={index} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
}
