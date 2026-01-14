/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F172A",
        surface: "#1E293B",
        accent: "#22D3EE",
        text: "#F8FAFC",
        muted: "#94A3B8",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
