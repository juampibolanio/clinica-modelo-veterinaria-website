import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import { card, floatingElements, gradientStrip, brightnessHover, avatarWrapper, avatar, nameTypography, secondaryBar, specialtyTypography, licenseTypography, bottomDecoration } from '../../styles/Home/TeamCardSx.js'

export default function TeamCard({ name, surname, photo, specialty, license, index = 0 }) {
    return (
        <Card
            className="team-card"
            sx={card(index)}
        >
            {/* Floating decorative elements */}
            <Box
                className="floating-elements"
                sx={floatingElements}
            />

            {/* Top gradient strip  */}
            <Box
                className="gradient-strip"
                sx={gradientStrip}
            />

            {/* Brightness hover */}
            <Box
                sx={brightnessHover}
            />

            {/* Avatar  */}
            <Box sx={{ mt: 5, mb: 2, position: "relative", zIndex: 2 }}>
                <Box
                    sx={avatarWrapper}
                >
                    <Avatar
                        className="team-avatar"
                        src={photo}
                        alt={`Dr. ${name} ${surname}`}
                        sx={avatar}
                    />
                </Box>
            </Box>

            {/* Content  */}
            <CardContent
                sx={{
                    flexGrow: 1,
                    px: 3,
                    py: 2,
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                {/* Name */}
                <Box>
                    <Typography
                        variant="h6"
                        sx={nameTypography}
                    >
                        {surname} {name}
                    </Typography>

                    {/* Secondary bar  */}
                    <Box
                        className="secondary-bar"
                        sx={secondaryBar}
                    />
                </Box>

                {/* profesional information */}
                <Box>
                    <Typography
                        variant="body1"
                        sx={specialtyTypography}
                    >
                        {specialty}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={licenseTypography}
                    >
                        {license}
                    </Typography>
                </Box>
            </CardContent>

            {/* Bottom decoration */}
            <Box
                sx={bottomDecoration}
            />
        </Card>
    );
}