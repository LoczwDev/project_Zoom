/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      borderColor: {
        hard: "#e5e7eb",
      },
      colors: {
        accent: "#FF0000",
        soft: "rgb(60, 68, 71)",
        dark: "#1C1F2E",
        orange: "#FF742E",
        blue: "#0E78F9",
        violet: "#830EF9",
        yellow: "#F9A90E",
      },
      backgroundImage: {
        bg_hero: "url('./src/assets/images/bg_hero_meeting.png')",
      },
      backgroundColor: {
        hero: "rgb(246, 244, 239)",
        profile: "rgb(243 244 246)",
      },
      boxShadow: {
        card: "rgba(100, 100, 111, 0.2) 0px 50px 30px -20px",
        price: "rgba(100, 100, 111, 0.2) 0px 0px 15px 0px;",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
