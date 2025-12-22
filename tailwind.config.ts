/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      fontFamily: {
        "sfpro-300": ["SFProLight"],
        "sfpro-400": ["SFProRegular"],
        "sfpro-500": ["SFProMedium"],
        "sfpro-600": ["SFProSemibold"],
        "sfpro-700": ["SFProBold"],
        "sfpro-900": ["SFProBlack"],
      },
      fontSize: {
        authMainheading: ["26px", { lineHeight: "33px" }],
        text18: ["18px", { lineHeight: "24px" }],
        text14: ["14px", { lineHeight: "20px" }],
        text16: ["16px", { lineHeight: "20px" }],
        text10: ["10px", { lineHeight: "20px" }],
        text12: ["12px", { lineHeight: "20px" }],
        text9: ["9px", { lineHeight: "20px" }],
      },
      colors: {
        primaryColor: "#0087FF",
        headingText: "#02060B",
        authgray: "#7B7B7B",
        gray: "#999A9A",
        border: "#999A9A4D",
        primaryBg: "#FEFEFE",
        bgWhite: "#FEFEFE",
        bgGreen: "#22C55E",
        textBlue: "#0087FF",
        textBlue100: "#1F36E7",
        textBlue50: "#0087FF1A",
        textProgress: "#523BE4",
        textUpcoming: "#FFB700",
        textError: "#E71F2F",
        textWhite: "#FFFFFF",
        borderPrimary: "#999a9a1A",
      },
    },
  },
  plugins: [],
};
