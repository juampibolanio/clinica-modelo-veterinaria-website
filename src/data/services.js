// src/data/services.js
import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ContentCutIcon from '@mui/icons-material/ContentCut';

export const services = [
    {
        title: "Clínica Veterinaria",
        description: "Atendemos a perros y gatos con diagnóstico clínico integral, cubriendo todas las necesidades de salud de tu mascota.",
        icon: LocalHospitalIcon,
    },
    {
        title: "Especialidades Médicas",
        description: "Contamos con médicos veterinarios especialistas en distintas áreas, garantizando cuidado completo y seguro para tu mascota.",
        icon: HealthAndSafetyIcon,
    },
    {
        title: "Procedimientos Diagnósticos",
        description: "Realizamos análisis clínicos, electrocardiogramas y estudios citológicos para un diagnóstico preciso y confiable.",
        icon: PetsIcon,
    },
    {
        title: "Nutrición y Bienestar",
        description: "Ofrecemos asesoramiento nutricional y cuidados especiales, asegurando la salud y bienestar de tus mascotas a largo plazo.",
        icon: ContentCutIcon,
    },
];
