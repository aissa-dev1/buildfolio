import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "gray-foreground": "hsl(var(--gray-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
      },
      spacing: {
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      // Type `theme` properly using `Record<string, string>` for spacing
      const spacing = theme("spacing") as Record<string, string>;
      const customUtilities: Record<string, Record<string, string>> = {};

      // Generate padding, margin, and gap classes dynamically
      Object.entries(spacing).forEach(([key, value]) => {
        customUtilities[`.p-${key}`] = { padding: value };
        customUtilities[`.pt-${key}`] = { paddingTop: value };
        customUtilities[`.pr-${key}`] = { paddingRight: value };
        customUtilities[`.pb-${key}`] = { paddingBottom: value };
        customUtilities[`.pl-${key}`] = { paddingLeft: value };
        customUtilities[`.m-${key}`] = { margin: value };
        customUtilities[`.mt-${key}`] = { marginTop: value };
        customUtilities[`.mr-${key}`] = { marginRight: value };
        customUtilities[`.mb-${key}`] = { marginBottom: value };
        customUtilities[`.ml-${key}`] = { marginLeft: value };
        customUtilities[`.gap-${key}`] = { gap: value };
      });

      addUtilities(customUtilities);
    }),
  ],
};
export default config;
