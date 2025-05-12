import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "footer-bg": `url("/footer-bg.png")`,
        "contact-bg": `url("/contact-hero.png")`,
        "donate-bg": `url("/donate.jpg")`,
        quote: `url("/quotes.png")`,
        "hero-bg":`url("/growth.jpg")`,
        "mission":`url("/AfridependentLogo.svg")`,
        enterprise: `url("/enterprise.jpg")`,
        trade:`url("/trade.jpg")`,
        currency:`url("/currency.jpg")`,
        hero: `url("/hero3.jpg")`,
        pattern: `url("/pattern.jpg")`,
        "pattern_subscribe": `url("/pattern_subscribe.png")`,
        "pattern_bg": `url("/bg-pattern.jpg")`,
        "publica_bg": `url("/public_pattern.jpg")`,
       "about_img": `url("/employee2.png")`,
        'hero-gradient': 'linear-gradient(135deg, #002813, #d2b48c, #f4f1e6)',
        "nilar":`url("/nilar.png")`,
        "nilar_coin": `url("/nilar_coin.jpg")`,
        "eco_flow": `url("/eco_flow.jpg")`,
        "concept": `url("/concept.jpg")`,
        "teacher": `url("/teacher-replace.jpg")`,
        bg_home:`url("/hero_landing.jpg")`,
        contact: `url("/contact.jpg")`,
        mission_hands:`url("/working_mission.jpg")`,
        publication:`url("/publication.jpg")`,
        logo_bg: `url("/Afridependent_2.svg")`,
        gradient:
          "linear-gradient(rgba(138, 65, 50, .9) 10%, rgba(36, 17, 13, 0.6) 90%);",
           'tan-lavender-gradient': 'linear-gradient(180deg, hsl(var(--tan)) 0%, hsl(var(--lavender-tint)) 100%)'
      },
      fontFamily: {
        nohemi: ["var(--font-nohemi)"],
        ojuju: ["var(--font-ojuju)"],
        inter_tight: ["var(--font-inter-tight)"],
      },
      colors: {
        forest: '#002813',
       
        cream: '#f4f1e6',
        olive: 'hsl(var(--olive-tint))',
        lavender: 'hsl(var(--lavender-tint))',
        deepForest: 'hsl(var(--deep-forest))',
        tan: 'hsl(var(--tan))',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'sage-gray': 'hsl(var(--sage-gray) / <alpha-value>)',
        'forest-green': 'hsl(var(--forest-green) / <alpha-value>)',
        primary: {
          DEFAULT: "#FFD5AF",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#8A4132",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 8s linear infinite',

      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
