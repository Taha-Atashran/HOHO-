/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        "5px": "5px",
      },
      colors: {
        bodyColor: "#FFFBF5B2",
        routerColor: "#CA05D1",
        filterBg: "rgba(0,0,0,0.2)",
        hohoColor: "#009FBD",
        btnColor: "#77037B",
        hohoDivColor: "#FFFBF5",
        textColor: "#333131",
      },
    },
  },
  plugins: [],
};
