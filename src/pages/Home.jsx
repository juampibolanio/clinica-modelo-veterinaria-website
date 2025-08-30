import { Box } from '@mui/material';
import { useRef } from 'react';
import Hero from '../components/Home/Hero';
import ServicesSection from '../components/Home/ServicesSection';
import TeamSection from '../components/Home/TeamSection';
import ContactSection from '../components/Home/ContactSection';

import { MainHomeContainerSx } from '../styles/Home/HomeSx';
import { useInView } from '../hooks/useInView';

function Home() {

  // References for each section
  const servicesRef = useRef();
  const teamRef = useRef();
  const contactRef = useRef();

  // Detects if the section is visible
  const servicesVisible = useInView(servicesRef);
  const teamVisible = useInView(teamRef);
  const contactVisible = useInView(contactRef);

  // Common animation for sections
  const sectionSx = (visible) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '100%',
    mb: 6,
  });

  return (
    <>
      {/*--- Hero ---*/}
      <Hero />

      <Box id="inicio" sx={MainHomeContainerSx}>
        {/*----- Services Section ----*/}
        <Box ref={servicesRef} sx={sectionSx(servicesVisible)}>
          <ServicesSection />
        </Box>
        {/*----- End Services Section ----*/}

        {/*----- Veterinary Team Section -----*/}
        <Box ref={teamRef} sx={sectionSx(teamVisible)}>
          <TeamSection />
        </Box>
        {/*----- End Veterinary Team Section -----*/}

        {/*----- Veterinary Contact Section -----*/}
        <Box ref={contactRef} sx={sectionSx(contactVisible)}>
          <ContactSection />
        </Box>
        {/*----- End Veterinary Contact Section -----*/}
      </Box>
    </>
  );
}

export default Home;
