import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3781E3',
            light: '#5A9EF0',
            dark: '#2C65B7',
        },
        secondary: {
            main: '#7027A0',
            light: '#9D50CC',
            dark: '#4B1B6E',
        },
        background: {
            default: '#E6F7FF',
            paper: '#fff',
        },
        success: {
            main: '#10b981',
        },
        error: {
            main: '#ef4444',
        },
        warning: {
            main: '#f59e0b',
        },
        typography: {
            fontFamily: "Nunito, Arial, sans-serif",
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 600,
            fontWeightBold: 700,
            fontStyleItalic: "italic",
        },
    },
});