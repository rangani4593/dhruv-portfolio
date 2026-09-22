/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    // same breakpoints the design was tuned at
    screens: { sm: "640px", md: "900px", lg: "1100px", xl: "1280px" },
    extend: {
      colors: {
        bg: "#f4f7fb",
        bg2: "#eaf0f8",
        card: "#ffffff",
        ink: "#111c2e",
        body: "#516074",
        line: "#e2e9f2",
        line2: "#d3ddeb",
        faint: "#8a99ad",
        b1: "#0b63e5",
        b2: "#3b8cff",
        b3: "#00b8d4",
        navy: "#0a1a33",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        grad: "linear-gradient(120deg,#0b63e5,#00b8d4)",
      },
      boxShadow: {
        sh: "0 24px 60px -30px rgba(11,99,229,.35)",
      },
      maxWidth: { wrap: "1160px" },
      keyframes: {
        floatB: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-36px,40px) scale(1.12)" },
        },
      },
      animation: { floatB: "floatB 20s ease-in-out infinite" },
    },
  },
  plugins: [],
};
