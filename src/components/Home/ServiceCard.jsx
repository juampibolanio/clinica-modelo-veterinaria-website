import { Box, Card, Typography } from "@mui/material";
import { CardSx, ContentBoxSx, DescriptionSx, IconSx, TitleSx } from "../../styles/Home/ServiceCardSx";

function ServiceCard({ title, description, icon }) {
    return (
        <Card sx={CardSx}>
            <Box sx={ContentBoxSx}>
                {/*----- Icon ----*/}
                <Box sx={IconSx}>
                    {icon}
                </Box>

                {/*---- Title ---- */}
                <Typography variant="h6" sx={TitleSx}>
                    {title}
                </Typography>

                {/*---- Description ----*/}
                <Typography variant="body2" sx={DescriptionSx}>
                    {description}
                </Typography>
            </Box>
        </Card>
    );
}

export default ServiceCard;
