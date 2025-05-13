# Raviteja Kunapareddy Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, designed to showcase AI/ML projects with a focus on explainability.

## Features

- 🌓 Light/Dark mode toggle
- 📱 Fully responsive design
- 🎬 Smooth animations with Framer Motion
- 📊 Dynamic project filtering
- 🔍 Modal project details
- 🧩 Component-based architecture
- 🚀 Optimized for GitHub Pages deployment

## Tech Stack

- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Scroll**: Smooth scrolling
- **React Icons**: Icon library
- **React Helmet**: SEO optimization

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RaviKunapareddy/portfolio-site.git
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://RaviKunapareddy.github.io/portfolio-site"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

3. Configure GitHub repository settings to use the `gh-pages` branch for GitHub Pages.

## Project Structure

```
portfolio-site/
├── public/
│   ├── 404.html
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Customization

- **Content**: Update project information in `src/data/projects.js`
- **Styling**: Modify theme colors in `tailwind.config.js`
- **Components**: Customize individual sections in the `src/components` directory

## License

MIT

## Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
