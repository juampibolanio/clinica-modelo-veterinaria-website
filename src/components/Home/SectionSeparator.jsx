import { Box } from "@mui/material";

const SectionSeparator = () => {
    return (
        <Box
            sx={{
                width: "80%", 
                height: 4, 
                background: "linear-gradient(90deg, #7027A0, #3781E3)",
                borderRadius: 2,
                mx: "auto", 
                my: "1",
            }}
        />
    )
}

export default SectionSeparator;
