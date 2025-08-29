import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";

export default function TeamCard({ name, surname, photo, specialty, license, theme }) {
    return (
        <Card
            sx={{
                borderRadius: 4,
                boxShadow: "0 6px 16px rgba(0,0,0,0.01)",
                textAlign: "center",
                background: "transparent",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: 300,
                height: 300,
                position: "relative",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 24px rgba(112,39,160,0.3)",
                },
            }}
        >
            {/* Top gradient strip */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 8,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    background: "linear-gradient(90deg, #3781E3, #7027A0)",
                }}
            />

            {/* Avatar */}
            <Box sx={{ mt: 4, mb: 1 }}>
                <Avatar
                    src={photo}
                    alt={`${name} ${surname}`}
                    sx={{
                        width: 110,
                        height: 110,
                        mx: "auto",
                        border: "3px solid #3781E3",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                />
            </Box>

            {/* Content */}
            <CardContent sx={{ flexGrow: 1, px: 3, position: "relative" }}>
                <Typography
                    variant="h6"
                    sx={(theme) => ({
                        color: theme.palette.common.white,
                        mb: 0.5
                    })}
                >
                    {surname} {name}
                </Typography>

                {/* Secondary bar */}
                <Box
                    sx={{
                        width: 50,
                        height: 3,
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        mx: "auto",
                        borderRadius: 2,
                        mb: 1,
                    }}
                />

                <Box>
                    <Typography
                        variant="body2"
                        sx={(theme) => ({
                            color: theme.palette.common.white,
                            mt: 0.8
                        })}
                    >
                        {specialty}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={(theme) => ({
                            color: theme.palette.grey[200],
                            mt: 0.5
                        })}
                    >
                        <p>{license}</p>
                    </Typography>
                </Box>
            </CardContent>

        </Card>
    );
}
