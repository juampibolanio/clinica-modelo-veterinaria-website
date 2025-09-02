/* ---- Blog Styles Profesionales ---- */

/* ---- Hero Section ---- */
export const HeroSectionSx = (theme) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.primary.light}15 50%, 
    ${theme.palette.secondary.light}10 100%
  )`,
  py: { xs: 6, md: 8 },
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.light}20 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, ${theme.palette.secondary.light}20 0%, transparent 50%)`,
    zIndex: 0,
  }
});

/* ---- Hero Title ---- */
export const HeroTitleSx = (theme) => ({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 800,
  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
});

/* ---- Hero Subtitle ---- */
export const HeroSubtitleSx = (theme) => ({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 400,
  color: theme.palette.text.primary,
  opacity: 0.8,
  maxWidth: 600,
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
});

/* ---- Search Container ---- */
export const SearchContainerSx = {
  maxWidth: 600,
  margin: '0 auto',
  mb: 4,
  position: 'relative',
  zIndex: 1,
};

/* ---- Search Field ---- */
export const SearchFieldSx = (theme) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 3,
    fontSize: '1.1rem',
    boxShadow: `0 4px 12px rgba(55, 129, 227, 0.1)`,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: `0 6px 20px rgba(55, 129, 227, 0.15)`,
    },
    '&.Mui-focused': {
      boxShadow: `0 8px 25px rgba(55, 129, 227, 0.2)`,
      '& fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
      }
    },
    '& fieldset': {
      borderColor: theme.palette.primary.light + '40',
      transition: 'all 0.3s ease',
    }
  }
});

/* ---- Filter Chips ---- */
export const FilterChipsSx = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1.5,
  justifyContent: 'center',
  mt: 3,
  position: 'relative',
  zIndex: 1,
};

/* ---- Article Card ---- */
export const ArticleCardSx = (theme, featured = false) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: featured 
    ? `0 8px 24px rgba(55, 129, 227, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)`
    : `0 4px 12px rgba(0, 0, 0, 0.08)`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  border: featured ? `2px solid ${theme.palette.primary.light}40` : `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: featured
      ? `0 16px 40px rgba(55, 129, 227, 0.25), 0 8px 20px rgba(0, 0, 0, 0.15)`
      : `0 12px 32px rgba(55, 129, 227, 0.15), 0 6px 16px rgba(0, 0, 0, 0.12)`,
  },
  '&::before': featured ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    zIndex: 1,
  } : {}
});

/* ---- Article Image ---- */
export const ArticleImageSx = {
  height: 220,
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '.MuiCard-root:hover &': {
    transform: 'scale(1.05)',
  }
};

/* ---- Category Chip ---- */
export const CategoryChipSx = (theme) => ({
  backgroundColor: `${theme.palette.primary.main}15`,
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '0.75rem',
  height: 26,
});

/* ---- Article Title ---- */
export const ArticleTitleSx = (theme) => ({
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: 1.3,
  color: theme.palette.text.primary,
  mb: 2,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  }
});

/* ---- Article Excerpt ---- */
export const ArticleExcerptSx = (theme) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  mb: 3,
  flexGrow: 1,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  fontSize: '0.95rem',
});

/* ---- Article Meta ---- */
export const ArticleMetaSx = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 1,
  '& svg': {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
  },
  '& .MuiTypography-caption': {
    color: theme.palette.text.secondary,
    fontWeight: 500,
    fontSize: '0.75rem',
  }
});

/* ---- Article Actions ---- */
export const ArticleActionsSx = {
  mt: 'auto',
  pt: 2,
};

/* ---- Loading Container ---- */
export const LoadingContainerSx = {
  py: 4,
};

/* ---- Pagination Container ---- */
export const PaginationContainerSx = {
  display: 'flex',
  justifyContent: 'center',
  mt: 6,
  py: 4,
};