import { Box, Card, Typography } from "@mui/material";

function ServiceCard({ title, description, icon }) {
    return (
        <Card
            sx={{
                maxWidth: 340,
                width: "100%",
                borderRadius: 4,
                backgroundColor: "background.paper",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                overflow: "hidden",
                borderTop: "6px solid",
                borderImage: "linear-gradient(90deg, #3781E3, #7027A0) 1", // detalle pro
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={3}
                sx={{ textAlign: "center" }}
            >
                {/*-------------------------------- Ícono --------------------------------*/}
                <Box
                    sx={{
                        mb: 2,
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #3781E3, #7027A0)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: 32,
                    }}
                >
                    {icon}
                </Box>

                {/* Título */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontFamily: "Nunito",
                        color: "primary.main",
                    }}
                >
                    {title}
                </Typography>

                {/*-------------------------------- Descripción --------------------------------*/}
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: "Nunito",
                        color: "text.secondary",
                        lineHeight: 1.5,
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Card>
    );
}

export default ServiceCard;
