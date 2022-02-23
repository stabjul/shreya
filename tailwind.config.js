module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 10s linear infinite",
      },
    },
  },
  plugins: [],
};
