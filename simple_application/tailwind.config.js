/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f6f6fd",
        gray: "#2a2b38",
        lightsteelblue: "#b9bacc",
        mediumaquamarine: {
          100: "#15b48e",
          200: "rgba(21, 180, 142, 0.25)",
        },
        salmon: {
          100: "#ef6461",
          200: "rgba(239, 100, 97, 0.25)",
        },
        gainsboro: {
          100: "#dcdde5",
          200: "rgba(220, 221, 229, 0.1)",
        },
        white: "#fff",
        lightgreen: "#48da82",
      },
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
    },
    fontSize: {
      xs: "12px",
      "3xs": "10px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
