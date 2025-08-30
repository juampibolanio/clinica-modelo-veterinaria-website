import { Box, Card, Typography } from "@mui/material";
import { 
    CardSx, 
    ContentBoxSx, 
    DescriptionSx, 
    IconSx, 
    TitleSx,
    FloatingElementsSx,
    ShimmerOverlaySx 
} from "../../styles/Home/ServiceCardSx";

function ServiceCard({ title, description, icon, index = 0 }) {
    return (
        <Card 
            className="service-card"
            sx={{
                ...CardSx(),
                '--delay': `${0.2 + index * 0.15}s`,
            }}
        >
            {/* Decorative elements */}
            <Box sx={FloatingElementsSx()}>
                <Box className="floating-dot dot-1" />
                <Box className="floating-dot dot-2" />
                <Box className="floating-dot dot-3" />
            </Box>

            {/* Overlay brightness */}
            <Box sx={ShimmerOverlaySx()} />

            <Box sx={ContentBoxSx()}>
                {/*----- Icon  ----*/}
                <Box sx={IconSx()} className="service-icon">
                    {icon}
                    {/* Pulse background */}
                    <Box className="icon-pulse" />
                </Box>

                {/*---- Title ---- */}
                <Typography variant="h6" sx={TitleSx()}>
                    {title}
                </Typography>

                {/*---- Description ----*/}
                <Typography variant="body2" sx={DescriptionSx()}>
                    {description}
                </Typography>
            </Box>
        </Card>
    );
}

export default ServiceCard;