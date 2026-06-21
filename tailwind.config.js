/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#060814",
        brandIndigo: {
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        brandTeal: {
          500: "#06b6d4",
          600: "#0891b2",
        },
        brandGreen: {
          500: "#10b981",
          600: "#059669",
        },
        textPrimary: "#f3f4f6",
        textSecondary: "#9ca3af",
        textMuted: "#6b7280",
      },
      fontFamily: {
        header: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
