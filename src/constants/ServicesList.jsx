import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ContentCutIcon from '@mui/icons-material/ContentCut';

export const services = [
    {
        title: "Consultas Veterinarias",
        description: "Revisiones completas para mantener a tus mascotas saludables y felices.",
        icon: <LocalHospitalIcon />,
    },
    {
        title: "Vacunación y Desparasitación",
        description: "Protegemos a tus mascotas con vacunas y tratamientos preventivos de calidad.",
        icon: <HealthAndSafetyIcon />,
    },
    {
        title: "Cirugías Especializadas",
        description: "Contamos con procedimientos quirúrgicos seguros y profesionales.",
        icon: <PetsIcon />,
    },
    {
        title: "Estética y Cuidado",
        description: "Baños, cortes y cuidados especiales para el bienestar de tus mascotas.",
        icon: <ContentCutIcon />,
    },
];