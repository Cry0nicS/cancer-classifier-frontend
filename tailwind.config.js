import {BreakpointsPixels} from "./constants/breakpoints";

let colors = {
    scale: "#FAFAF5", // subtle off-white, good for backgrounds
    white: "#FFFFFF", // pure white
    gray: {
        50: "#F7FAFC",
        100: "#EDF2F7",
        200: "#E2E8F0",
        300: "#CBD5E0",
        400: "#A0AEC0",
        500: "#718096",
        600: "#4A5568",
        700: "#2D3748",
        800: "#1A202C",
        900: "#171923"
    },
    azure: {
        50: "#F0FAFF",
        100: "#E1F5FF",
        200: "#C4E9FF",
        300: "#A0D8FF",
        400: "#7ABDFF",
        500: "#51A2FF",
        600: "#3188FF",
        700: "#1F6FEF",
        800: "#1855CF",
        900: "#123EAF"
    },
    teal: {
        50: "#E6FFFA",
        100: "#B2F5EA",
        200: "#81E6D9",
        300: "#4FD1C5",
        400: "#38B2AC",
        500: "#319795",
        600: "#2C7A7B",
        700: "#285E61",
        800: "#234E52",
        900: "#1D4044"
    },
    healingGreen: {
        50: "#F0FFF4",
        100: "#C6F6D5",
        200: "#9AE6B4",
        300: "#68D391",
        400: "#48BB78",
        500: "#38A169",
        600: "#2F855A",
        700: "#276749",
        800: "#22543D",
        900: "#1C4532"
    },
    rose: {
        50: "#FFF5F7",
        100: "#FED7E2",
        200: "#FBB6CE",
        300: "#F687B3",
        400: "#ED64A6",
        500: "#D53F8C",
        600: "#B83280",
        700: "#97266D",
        800: "#702459",
        900: "#521B41"
    },
    amber: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FBBF24",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309",
        800: "#92400E",
        900: "#78350F"
    },
    lavender: {
        50: "#FAF5FF",
        100: "#E9D8FD",
        200: "#D6BCFA",
        300: "#B794F4",
        400: "#9F7AEA",
        500: "#805AD5",
        600: "#6B46C1",
        700: "#553C9A",
        800: "#44337A",
        900: "#322659"
    }
};

// set up aliases
colors = {
    ...colors,
    "main-azure": colors.azure[700],
    "main-teal": colors.teal[200],
    "main-lavender": colors.lavender[300],
    "main-rose": colors.rose[300],
    "main-scale": colors.scale
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./app.vue",
        "./layouts/**/*.vue",
        "./nuxt.config.{js,ts}",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}"
    ],
    safelist: [
        {
            pattern: /(bg|text|stroke|fill)-main-.*/
        },
        {
            pattern: /(bg|text|stroke|fill)-.*/
        }
    ],
    theme: {
        colors,
        fontFamily: {
            sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"], // Clean and modern, good for UI readability
            serif: ["Georgia", "Times New Roman", "Times", "serif"] // Traditional and readable, offers a contrast to the sans-serif
        },
        fontSize: {
            "lg": "1.125rem",
            "md": "1rem",
            "sm": "0.875rem",
            "6xl": "3.5rem",
            "5xl": "3rem",
            "4xl": "2.5rem",
            "3xl": "2rem",
            "2xl": "1.5rem",
            "xl": "1.25rem",
            "base": "1.125rem"
        },
        extend: {
            textColor: {
                brand: colors.azure[800],
                primary: colors.gray[900],
                secondary: colors.gray[700],
                white: colors.white
            },
            screens: BreakpointsPixels,
            boxShadow: {
                DEFAULT:
                    "0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.10); "
            }
        }
    }
};
