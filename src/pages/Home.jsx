import { Box } from '@mui/material';
import { useRef, useEffect } from 'react';
import Hero from '../components/Home/Hero';
import ServicesSection from '../components/Home/ServicesSection';
import TeamSection from '../components/Home/TeamSection';
import ContactSection from '../components/Home/ContactSection';
import { scrollToId } from '../utils/Home/scrollToId.js';
import { MainHomeContainerSx } from '../styles/Home/HomeSx';
import { useInView } from '../hooks/useInView';
import { useLocation } from 'react-router-dom';

// refers to the path with its corresponding id
const PATH_TO_ID = {
  "/servicios": "servicios",
  "/equipo": "equipo",
  "/contacto": "contacto",
  "/": "inicio"
}

function Home() {

  const location = useLocation();

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
  });

  useEffect(() => {

    // execute scroll when the path/hash changes.
    //  priority: explicit hash > mapping by pathname
    const tryScroll = () => {
      const hash = location.hash ? location.hash.replace("#", "") : null;
      const mapped = PATH_TO_ID[location.pathname];
      const targetId = hash || mapped;
      if (!targetId) return;
      // use the helper (or implement inline)
      scrollToId(targetId, 80, "smooth");
    };

    // ensure that the DOM is rendered (images, etc.)
    const raf = requestAnimationFrame(() => {
      setTimeout(tryScroll, 20);
    });
    return () => cancelAnimationFrame(raf);
  }, [location]);

  return (
    <>
      {/*--- Hero ---*/}
      <Hero />

      <Box sx={MainHomeContainerSx}>
        {/*----- Services Section ----*/}
        <Box id="servicios" ref={servicesRef} sx={sectionSx(servicesVisible)}>
          <ServicesSection />
        </Box>
        {/*----- End Services Section ----*/}

        {/*----- Veterinary Team Section -----*/}
        <Box id="equipo" ref={teamRef} sx={sectionSx(teamVisible)}>
          <TeamSection />
        </Box>
        {/*----- End Veterinary Team Section -----*/}

        {/*----- Veterinary Contact Section -----*/}
        <Box id="contacto" ref={contactRef} sx={sectionSx(contactVisible)}>
          <ContactSection />
        </Box>
        {/*----- End Veterinary Contact Section -----*/}
      </Box>
    </>
  );
}

export default Home;
