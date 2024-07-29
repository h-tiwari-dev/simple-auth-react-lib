/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                mono: ["Roboto Mono", "monospace"],
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1.5" }],
                sm: ["0.875rem", { lineHeight: "1.5715" }],
                base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
                lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
                xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
                "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.037em" }],
                "3xl": [
                    "1.875rem",
                    { lineHeight: "1.3333", letterSpacing: "-0.037em" },
                ],
                "4xl": ["2.25rem", { lineHeight: "1.2777", letterSpacing: "-0.037em" }],
                "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
                "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
                "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}

