import { Box, Typography, Grid, useTheme } from '@mui/material';
import TeamCard from './TeamCard';
import { teamMembers } from '../../data/teamMembers';
import logo from '../../assets/favicon.png';
import { TeamSectionSx, TeamGradientSx, TeamHeaderSx, TeamTextColumnSx, TeamTextTitleSx, TeamTextDescriptionSx, PlaceholderImageSx, TeamGridSx } from '../../styles/Home/TeamSectionSx';
import { SectionLineSx } from '../../styles/Home/HomeSx';


export default function TeamSection() {
    const theme = useTheme();

    return (
        <Box id="equipo" sx={TeamSectionSx()}>
            <Box sx={TeamGradientSx(theme)} />

            <Box sx={{ position: 'relative', zIndex: 4, width: '100%' }}>
                <Box sx={TeamHeaderSx()}>
                    <Box sx={TeamTextColumnSx()}>
                        <Typography variant="h4" sx={TeamTextTitleSx()}>Nuestro Equipo Veterinario</Typography>
                        <Box sx={SectionLineSx()} />
                        <Typography variant="body1" sx={TeamTextDescriptionSx()}>
                            Contamos con profesionales altamente capacitados en distintas especialidades, brindando atención integral y de excelencia para el cuidado de tus mascotas.
                        </Typography>
                    </Box>
                    <Box component="img" src={logo} alt="Logo de la clínica" sx={PlaceholderImageSx()} />
                </Box>

                <Grid container spacing={6} sx={TeamGridSx()}>
                    {teamMembers.slice(0, 6).map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <TeamCard {...member} index={index} theme={theme} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
