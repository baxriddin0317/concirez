import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'black': {
            DEFAULT: "#121212",
            100: "#505050"
          },
          'orange': {
            DEFAULT: "#FF462D"
          },
          'gray': {
            DEFAULT: "#E7E7F6"
          }
        }
      },
      backgroundImage: {
        'primary': "linear-gradient(180deg, rgba(246, 246, 246, 0.05) 0%",
        'tab': "linear-gradient(0deg, rgba(255, 70, 45, 0.80) 0%, rgba(153, 42, 27, 0.80) 100%)",
        'card': "linear-gradient(90deg, rgba(246, 246, 246, 0.05) 0%, rgba(144, 144, 144, 0.05) 100%)",
        'secondary': "linear-gradient(270deg, rgba(246, 246, 246, 0.05) 0%, rgba(144, 144, 144, 0.05) 100%)",
        'secondary-2': "linear-gradient(270deg, rgba(18, 18, 18, 0.00) 0%, #FF462D 50%, rgba(18, 18, 18, 0.00) 100%)"
      },
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans serif'],
        'atyp': ['Atyp Display', 'sans serif'],
      },
      fontSize: {
        'big': "55px",
        "xxs": "10px",
        "normal": ["44px", "50px"]
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backdropBlur: {
        'xl': "100px",
        'lg': "50px"
      }
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
