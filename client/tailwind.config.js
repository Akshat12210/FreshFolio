/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: () => ({
      white: "#ffffff",
      black:"#000000",
      main:"#6246ea",
      lightPrimary: "#F4F7FE",
      blueSecondary: "#4318FF",
      brandLinear: "#868CFF",
      gray: {
        50: "#f8f9fa",
        100: "#edf2f7",
        200: "#e9ecef",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#adb5bd",
        600: "#a3aed0",
        700: "#707eae",
        800: "#252f40",
        900: "#1b2559",
      },
      navy: {
        50: "#d0dcfb",
        100: "#aac0fe",
        200: "#a3b9f8",
        300: "#728fea",
        400: "#3652ba",
        500: "#1b3bbb",
        600: "#24388a",
        700: "#1B254B",
        800: "#111c44",
        900: "#0b1437",
      },
      red: {
        50: "#ee5d501a",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#f53939",
        600: "#ea0606",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#fbcf33",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
      },
      lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#98ec2d",
        500: "#82d616",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
      },
      green: {
        50: "#05cd991a",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#17ad37",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
      },
      cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#21d4fd",
        500: "#17c1e8",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2152ff",
        700: "#1d4ed8",
        800: "#344e86",
        900: "#00007d",
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7928ca",
        800: "#6b21a8",
        900: "#581c87",
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ff0080",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
      },
      brand: {
        50: "#E9E3FF",
        100: "#C0B8FE",
        200: "#A195FD",
        300: "#8171FC",
        400: "#7551FF",
        500: "#422AFB",
        600: "#3311DB",
        700: "#2111A5",
        800: "#190793",
        900: "#11047A",
      },
      shadow: {
        500: "rgba(112, 144, 176, 0.08)",
      },
    }),
  },
  plugins: [],
}