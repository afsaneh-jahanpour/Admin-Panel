module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        kidsydark: {

          "primary": "#3fef00",

          "secondary": "#f7beb7",

          "accent": "#7ae8d9",

          "neutral": "#1F1D25",

          "base-100": "#1C222F",

          "info": "#A2C3F1",

          "success": "#239A88",

          "warning": "#AB8A12",

          "error": "#F9345F",
        },
      },
      {
        kidsylight: {

          "primary": "#dd971f",

          "secondary": "#90ea59",

          "accent": "#dd758f",

          "neutral": "#36273F",

          "base-100": "#E0E6F0",

          "info": "#81A3DA",

          "success": "#19765A",

          "warning": "#F0C066",

          "error": "#FB6A50",
        },
      },
    ],
  },

}