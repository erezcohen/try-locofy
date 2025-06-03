/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Background-Brand-Default": "#2c2c2c",
        "Border-Brand-Default": "#2c2c2c",
        "Icon-Brand-On-Brand": "#f5f5f5",
        "Border-Danger-Secondary": "#c00f0c",
        "Icon-Danger-On-Danger": "#fee9e7",
        "Text-Danger-On-Danger": "#fee9e7",
        "Border-Default-Default": "#d9d9d9",
        "Background-Default-Default": "#fff",
        "Text-Default-Default": "#1e1e1e",
        "Icon-Default-Default": "#1e1e1e",
      },
      spacing: {
        "Space-200": "8px",
        "Space-300": "12px",
        "Space-400": "16px",
      },
      fontFamily: {
        "Body-Font-Family": "Inter",
      },
      borderRadius: {
        "Scale-06": "32px",
        "Radius-200": "8px",
        "Radius-Full": "9999px",
      },
      borderWidth: {
        "Stroke-Border": "1px",
      },
    },
    fontSize: {
      "Body-Size-Medium": "16px",
    },
    fontWeight: {
      "Body-Font-Weight-Regular": 400,
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
