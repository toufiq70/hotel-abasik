/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Bengali"],
        siliguri: ["Hind Siliguri"],
      },
      screens: {
        mobile: "480px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1200px",
        large: "1400px",
      },
      colors: {
        textColor: "#3B3849",
        activeText: "#DE0655",
        textHover: "#EF512E",
        btn_bg: "bg-gradient-to-r  from-#EF512E to-#DE0655",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
