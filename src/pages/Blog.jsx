import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Blog() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #E6F7FF 0%, #f8f9fa 100%)',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2.5rem', md: '3rem' },
          background: 'linear-gradient(135deg, #7027A0, #3781E3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2,
        }}
      >
        Sección en Desarrollo
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          color: 'text.secondary',
          mb: 4,
        }}
      >
        Estamos trabajando en esta sección. ¡Pronto encontrarás contenido interesante aquí!
      </Typography>

      <Button
        href="/"
        variant="contained"
        sx={{
          background: 'linear-gradient(135deg, #3781E3, #7027A0)',
          color: '#fff',
          px: 4,
          py: 1.5,
          borderRadius: 50,
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(55, 129, 227, 0.4)',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 12px 32px rgba(55, 129, 227, 0.5)',
            background: 'linear-gradient(135deg, #7027A0, #3781E3)',
          },
        }}
      >
        Volver al Inicio
      </Button>
    </Box>
  );
}
