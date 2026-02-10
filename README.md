# Sarvajana AI 2026 – Landing Page

Modern, responsive one-page website for the Sarvajana AI academic summit (MIET Jammu, 14 February 2026).

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- Fonts: Inter, Poppins, Sora (Google Fonts)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## Speaker image

Place **sidharth.jpg** in **`public/assets/`** so it is available at `/assets/sidharth.jpg`. If the file is missing, a placeholder image is shown.

## Project structure

- `src/App.jsx` – main app and section order
- `src/components/` – Navbar, Hero, About, Speakers, Themes, Schedule, Venue, Footer
- `src/index.css` – global styles and Tailwind
- `public/assets/` – static assets (e.g. speaker photo)
