/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#F0B03A',
        hero: '#F7F5EA',
        surface: '#FFFFFF',
        soft: '#FBF7EA',
        ink: {
          DEFAULT: '#10283A',
          soft: '#4A5A66',
          muted: '#7C8B96',
        },
        teal: {
          DEFAULT: '#1F6B5C',
          hover: '#185549',
          light: '#EAF4F1',
          border: '#A3D2C8',
        },
        yellow: {
          DEFAULT: '#F2B83B',
          light: '#FCF5E3',
        },
        orange: {
          DEFAULT: '#F0643C',
          hover: '#D9522B',
          light: '#FDEEEA',
        },
        line: '#E4E1D4',
      },
      fontFamily: {
        sans: ['Outfit', 'Urbanist', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'Mrs Saint Delafield', 'cursive'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(16, 40, 58, 0.06)',
        'card-hover': '0 16px 40px rgba(16, 40, 58, 0.12)',
        'canvas': '0 20px 60px rgba(16, 40, 58, 0.14)',
      },
      borderRadius: {
        'canvas': '28px',
        'card': '20px',
        'card-sm': '16px',
      },
      maxWidth: {
        'canvas': '1140px',
      }
    },
  },
  plugins: [],
}

