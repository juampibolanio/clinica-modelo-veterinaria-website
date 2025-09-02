import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Chip,
    Button,
    Avatar,
    Divider,
    Card,
    CardContent,
    Grid,
    IconButton,
    Breadcrumbs,
    Link,
    Fab,
    Tooltip,
    Alert
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PrintIcon from '@mui/icons-material/Print';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';

// Datos del artículo (normalmente vendría de props o API)
const articleData = {
    id: 1,
    title: "Cuidados esenciales para cachorros recién nacidos",
    excerpt: "Descubre los primeros pasos fundamentales para garantizar la salud y bienestar de los cachorros en sus primeras semanas de vida.",
    content: `
    <div>
      <p>Los primeros días de vida de un cachorro son fundamentales para su desarrollo y bienestar futuro. Durante este período crítico, los pequeños son extremadamente vulnerables y necesitan cuidados específicos y constantes.</p>
      
      <h3>🍼 Alimentación en las primeras horas</h3>
      <p>La leche materna es esencial durante las primeras 6-8 semanas. Si la madre no está disponible, será necesario usar sustitutos lácteos específicos para cachorros. <strong>Nunca uses leche de vaca</strong>, ya que puede causar problemas digestivos graves.</p>
      
      <blockquote style="background: rgba(55, 129, 227, 0.1); padding: 20px; border-left: 4px solid #3781E3; margin: 20px 0; border-radius: 8px;">
        <strong>Consejo profesional:</strong> Los cachorros deben alimentarse cada 2-3 horas durante sus primeras semanas de vida, incluso durante la noche.
      </blockquote>
      
      <h3>🌡️ Control de temperatura</h3>
      <p>Los cachorros recién nacidos no pueden regular su temperatura corporal. Es crucial mantenerlos en un ambiente cálido (entre 29-32°C durante la primera semana). Puedes usar:</p>
      <ul>
        <li>Mantas térmicas especiales para mascotas</li>
        <li>Lámparas de calor infrarrojo</li>
        <li>Botellas de agua tibia envueltas en toallas</li>
      </ul>
      
      <h3>🏥 Señales de alarma</h3>
      <p>Es importante estar atento a cualquier signo que pueda indicar problemas de salud:</p>
      <ul>
        <li><strong>Letargo excesivo:</strong> Si el cachorro no se mueve o parece muy débil</li>
        <li><strong>Llanto constante:</strong> Puede indicar hambre, frío o malestar</li>
        <li><strong>Problemas respiratorios:</strong> Respiración agitada o dificultosa</li>
        <li><strong>Cambios en el color:</strong> Encías pálidas o azuladas</li>
      </ul>
      
      <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #ef4444; margin: 25px 0;">
        <h4 style="color: #ef4444; margin-bottom: 10px;">⚠️ Importante</h4>
        <p><strong>Ante cualquier duda o síntoma preocupante, contacta inmediatamente con tu veterinario.</strong> Los cachorros pueden deteriorarse rápidamente, pero también responden bien al tratamiento oportuno.</p>
      </div>
      
      <h3>💚 Primeras vacunas y desparasitación</h3>
      <p>Aunque las primeras vacunas no se administran hasta las 6-8 semanas, es importante programar la primera visita veterinaria durante las primeras semanas de vida para:</p>
      <ul>
        <li>Evaluación general de salud</li>
        <li>Establecimiento del calendario de vacunación</li>
        <li>Asesoramiento sobre nutrición y cuidados</li>
        <li>Detección temprana de posibles problemas congénitos</li>
      </ul>
      
      <h3>🎯 Conclusiones</h3>
      <p>El cuidado de cachorros recién nacidos requiere dedicación, conocimiento y mucha paciencia. Los primeros días son críticos, pero con los cuidados adecuados, estarás proporcionando la mejor base para que tu cachorro crezca sano y feliz.</p>
      
      <p>Recuerda que cada cachorro es único y puede tener necesidades específicas. No dudes en consultar con profesionales veterinarios para obtener la mejor orientación personalizada.</p>
    </div>
  `,
    category: "Cuidados",
    author: {
        name: "Dr. María González",
        title: "Veterinaria especialista en pediatría canina",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
        bio: "Más de 15 años de experiencia en cuidados veterinarios especializados en cachorros y gatitos."
    },
    publishDate: "2024-08-25",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop",
    views: 1250,
    likes: 89,
    featured: true,
    tags: ["cachorros", "cuidados", "alimentación", "salud", "veterinaria"],
    relatedArticles: [
        {
            id: 2,
            title: "Vacunación en gatos: calendario completo 2024",
            image: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=300&h=200&fit=crop",
            category: "Prevención"
        },
        {
            id: 3,
            title: "Alimentación natural para perros: beneficios",
            image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=200&fit=crop",
            category: "Nutrición"
        }
    ]
};

function ArticleDetail({ articleId, onBack }) {
    const theme = useTheme();
    const [article, setArticle] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        // Simular carga del artículo
        setArticle(articleData);
        setLikes(articleData.likes);
    }, [articleId]);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Enlace copiado al portapapeles');
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!article) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography>Cargando artículo...</Typography>
                </Box>
            </Container>
        );
    }

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #E6F7FF 0%, #f0f9ff 100%)',
            pb: 6
        }}>
            {/* Back Button Floating */}
            <Fab
                color="primary"
                aria-label="volver"
                onClick={onBack}
                sx={{
                    position: 'fixed',
                    top: 20,
                    left: 20,
                    zIndex: 1000,
                    bgcolor: '#3781E3',
                    '&:hover': {
                        bgcolor: '#2C65B7',
                    }
                }}
            >
                <ArrowBackIcon />
            </Fab>

            <Container maxWidth="lg" sx={{ pt: 4 }}>
                {/* Breadcrumbs */}
                <Breadcrumbs
                    aria-label="breadcrumb"
                    sx={{
                        mb: 3,
                        '& .MuiBreadcrumbs-separator': {
                            color: '#3781E3'
                        }
                    }}
                    separator={<NavigateNextIcon fontSize="small" />}
                >
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center', color: '#3781E3', cursor: 'pointer' }}
                        onClick={onBack}
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Inicio
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center', color: '#3781E3', cursor: 'pointer' }}
                        onClick={onBack}
                    >
                        <ArticleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Blog
                    </Link>
                    <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
                        <PetsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        {article.category}
                    </Typography>
                </Breadcrumbs>

                <Grid container spacing={4}>
                    {/* Main Content */}
                    <Grid item xs={12} lg={8}>
                        {/* Header */}
                        <Card sx={{
                            mb: 4,
                            borderRadius: 4,
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(55, 129, 227, 0.15)'
                        }}>
                            <Box
                                component="img"
                                src={article.image}
                                alt={article.title}
                                sx={{
                                    width: '100%',
                                    height: { xs: 200, md: 300 },
                                    objectFit: 'cover'
                                }}
                            />

                            <CardContent sx={{ p: 4 }}>
                                {/* Category and Featured Badge */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                    <Chip
                                        label={article.category}
                                        icon={<LocalHospitalIcon />}
                                        sx={{
                                            bgcolor: 'rgba(55, 129, 227, 0.1)',
                                            color: '#3781E3',
                                            fontWeight: 700,
                                            fontSize: '0.9rem',
                                            px: 1
                                        }}
                                    />
                                    {article.featured && (
                                        <Chip
                                            label="Artículo Destacado"
                                            sx={{
                                                bgcolor: 'rgba(112, 39, 160, 0.1)',
                                                color: '#7027A0',
                                                fontWeight: 600
                                            }}
                                        />
                                    )}
                                </Box>

                                {/* Title */}
                                <Typography
                                    variant="h3"
                                    component="h1"
                                    sx={{
                                        fontFamily: 'Nunito, sans-serif',
                                        fontWeight: 800,
                                        color: '#808080',
                                        mb: 3,
                                        fontSize: { xs: '2rem', md: '2.5rem' },
                                        lineHeight: 1.2
                                    }}
                                >
                                    {article.title}
                                </Typography>

                                {/* Meta Information */}
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    gap: 3,
                                    mb: 3
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <CalendarTodayIcon sx={{ fontSize: 18, color: '#808080' }} />
                                        <Typography variant="body2" sx={{ color: '#808080' }}>
                                            {formatDate(article.publishDate)}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AccessTimeIcon sx={{ fontSize: 18, color: '#808080' }} />
                                        <Typography variant="body2" sx={{ color: '#808080' }}>
                                            {article.readTime} de lectura
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <VisibilityIcon sx={{ fontSize: 18, color: '#808080' }} />
                                        <Typography variant="body2" sx={{ color: '#808080' }}>
                                            {article.views.toLocaleString()} visualizaciones
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Action Buttons */}
                                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                                    <Button
                                        variant={isLiked ? "contained" : "outlined"}
                                        startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                        onClick={handleLike}
                                        sx={{
                                            bgcolor: isLiked ? '#ef4444' : 'transparent',
                                            borderColor: '#ef4444',
                                            color: isLiked ? '#fff' : '#ef4444',
                                            '&:hover': {
                                                bgcolor: isLiked ? '#dc2626' : 'rgba(239, 68, 68, 0.1)',
                                            }
                                        }}
                                    >
                                        {likes}
                                    </Button>

                                    <Tooltip title={isBookmarked ? "Quitar de guardados" : "Guardar artículo"}>
                                        <IconButton
                                            onClick={handleBookmark}
                                            sx={{
                                                color: isBookmarked ? '#f59e0b' : '#808080',
                                                border: `2px solid ${isBookmarked ? '#f59e0b' : '#e5e7eb'}`,
                                                '&:hover': {
                                                    bgcolor: isBookmarked ? 'rgba(245, 158, 11, 0.1)' : 'rgba(128, 128, 128, 0.1)',
                                                }
                                            }}
                                        >
                                            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="Compartir artículo">
                                        <IconButton
                                            onClick={handleShare}
                                            sx={{
                                                color: '#3781E3',
                                                border: '2px solid #e5e7eb',
                                                '&:hover': {
                                                    bgcolor: 'rgba(55, 129, 227, 0.1)',
                                                    borderColor: '#3781E3'
                                                }
                                            }}
                                        >
                                            <ShareIcon />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="Imprimir artículo">
                                        <IconButton
                                            onClick={() => window.print()}
                                            sx={{
                                                color: '#808080',
                                                border: '2px solid #e5e7eb',
                                                '&:hover': {
                                                    bgcolor: 'rgba(128, 128, 128, 0.1)',
                                                }
                                            }}
                                        >
                                            <PrintIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>

                                <Divider sx={{ borderColor: 'rgba(55, 129, 227, 0.1)' }} />
                            </CardContent>
                        </Card>

                        {/* Article Content */}
                        <Card sx={{
                            borderRadius: 4,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                        }}>
                            <CardContent sx={{ p: 4 }}>
                                <Box
                                    sx={{
                                        '& h3': {
                                            fontFamily: 'Nunito, sans-serif',
                                            fontWeight: 700,
                                            fontSize: '1.5rem',
                                            color: '#3781E3',
                                            mt: 4,
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        },
                                        '& h4': {
                                            fontFamily: 'Nunito, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '1.25rem',
                                            color: '#808080',
                                            mt: 3,
                                            mb: 1.5
                                        },
                                        '& p': {
                                            fontSize: '1.1rem',
                                            lineHeight: 1.8,
                                            color: '#808080',
                                            mb: 2
                                        },
                                        '& ul, & ol': {
                                            pl: 3,
                                            mb: 2,
                                            '& li': {
                                                fontSize: '1.1rem',
                                                lineHeight: 1.8,
                                                color: '#808080',
                                                mb: 1
                                            }
                                        },
                                        '& strong': {
                                            fontWeight: 700,
                                            color: '#3781E3'
                                        },
                                        '& blockquote': {
                                            fontStyle: 'italic',
                                            '& strong': {
                                                color: '#3781E3'
                                            }
                                        }
                                    }}
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />

                                {/* Tags */}
                                <Divider sx={{ my: 4, borderColor: 'rgba(55, 129, 227, 0.1)' }} />

                                <Box>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 700,
                                        color: '#808080',
                                        mb: 2,
                                        fontFamily: 'Nunito, sans-serif'
                                    }}>
                                        Etiquetas del artículo
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {article.tags.map((tag, index) => (
                                            <Chip
                                                key={index}
                                                label={tag}
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    borderColor: '#3781E3',
                                                    color: '#3781E3',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(55, 129, 227, 0.1)',
                                                    }
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} lg={4}>
                        {/* Author Info */}
                        <Card sx={{
                            mb: 4,
                            borderRadius: 4,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                        }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{
                                    fontWeight: 700,
                                    color: '#808080',
                                    mb: 3,
                                    fontFamily: 'Nunito, sans-serif'
                                }}>
                                    Sobre el autor
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                    <Avatar
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        sx={{ width: 60, height: 60 }}
                                    />
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" sx={{
                                            fontWeight: 700,
                                            color: '#3781E3',
                                            fontFamily: 'Nunito, sans-serif'
                                        }}>
                                            {article.author.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{
                                            color: '#7027A0',
                                            fontWeight: 600,
                                            mb: 1
                                        }}>
                                            {article.author.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{
                                            color: '#808080',
                                            lineHeight: 1.5
                                        }}>
                                            {article.author.bio}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Contact CTA */}
                        <Alert
                            severity="info"
                            sx={{
                                mb: 4,
                                borderRadius: 3,
                                bgcolor: 'rgba(55, 129, 227, 0.05)',
                                border: '1px solid rgba(55, 129, 227, 0.2)',
                                '& .MuiAlert-icon': {
                                    color: '#3781E3'
                                }
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                ¿Tienes dudas sobre este tema?
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Nuestro equipo veterinario está aquí para ayudarte
                            </Typography>
                            <Button
                                variant="contained"
                                size="small"
                                fullWidth
                                sx={{
                                    bgcolor: '#3781E3',
                                    '&:hover': { bgcolor: '#2C65B7' }
                                }}
                            >
                                Consultar ahora
                            </Button>
                        </Alert>

                        {/* Related Articles */}
                        <Card sx={{
                            borderRadius: 4,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                        }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{
                                    fontWeight: 700,
                                    color: '#808080',
                                    mb: 3,
                                    fontFamily: 'Nunito, sans-serif'
                                }}>
                                    Artículos relacionados
                                </Typography>

                                {article.relatedArticles.map((related, index) => (
                                    <Box key={related.id} sx={{ mb: index < article.relatedArticles.length - 1 ? 3 : 0 }}>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Box
                                                component="img"
                                                src={related.image}
                                                alt={related.title}
                                                sx={{
                                                    width: 80,
                                                    height: 60,
                                                    objectFit: 'cover',
                                                    borderRadius: 2,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Chip
                                                    label={related.category}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(112, 39, 160, 0.1)',
                                                        color: '#7027A0',
                                                        fontWeight: 600,
                                                        fontSize: '0.7rem',
                                                        mb: 1
                                                    }}
                                                />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: '#808080',
                                                        lineHeight: 1.3,
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            color: '#3781E3'
                                                        }
                                                    }}
                                                >
                                                    {related.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        {index < article.relatedArticles.length - 1 && (
                                            <Divider sx={{ mt: 2, borderColor: 'rgba(128, 128, 128, 0.1)' }} />
                                        )}
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ArticleDetail;