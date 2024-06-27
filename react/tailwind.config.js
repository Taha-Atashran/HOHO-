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
        sliderColor: "#F2E9E9",
        cardSliderColor: "#FFFBF5",
        dateColor: "#999393",
        pinkColor: "#CA05D1",
        boxColor: "#F2E9E9",
        bodyColor: "#FFFBF5B2",
        hohoTextColor: "#585555",
        hoverBtn: "rgba(119, 3, 123, 0.1)",
        hoverDarkBtn: "rgba(119, 3, 123, 0.5)",
        founderColor: "#FFFBF5",
      },
      screens: {
        fouter: "800px",
      },
    },
  },
  plugins: [],
};
