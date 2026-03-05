/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          firo: {
            navy: "#435C3D",
            blue: "#435C3D",
            violet: "#A7683D",
            bg: "#F0EEDF",
            text: "#2F3B2B",
            muted: "#6F7878",
            line: "#CDD4D4",
            success: "#435C3D",
            warn: "#A7683D",
          },
        },
        boxShadow: {
          soft: "0 8px 24px rgba(47, 59, 43, 0.08)",
        },
      },
    },
    plugins: [],
  };
  