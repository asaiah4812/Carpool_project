import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");


export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	flowbite.content(),
  ],
  theme: {
  	extend: {
      colors: {
        btn: "#2B4BAB",
		secondary: "#CBE0FF",
		// footBG: "#F5F5F5"
      },
  	}
  },
  plugins: [
	flowbite.plugin(),
	require("tailwindcss-animate")],
} satisfies Config;
