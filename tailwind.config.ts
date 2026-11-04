import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        linen: "#F7F4EF", // main background
        suede: "#EFEBE3", // secondary background
        suedeDark: "#E3DDD1", // subtle borders and dividers
        sage: "#5E6F64",
        sageDark: "#48564D",
        sageLight: "#E8ECE9",
        freijo: "#A67C52", // freijó wood / caramel accent
        freijoLight: "#C5A880",
        charcoal: "#2C2A29", // main text
        muted: "#6E6A66", // secondary text
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
