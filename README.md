# Oke Oluwaseun — Portfolio

World-class React portfolio.

## Quick Start

```bash
npm install
npm start
```

## Build & Deploy to Netlify

```bash
npm run build
```

Then drag the `build/` folder into Netlify, or connect your GitHub repo with:
- Build command: `npm run build`
- Publish directory: `build`

## Project Structure

```
src/
  components/
    AnimSection.js    scroll-triggered fade-in wrapper
    Contact.js        contact form section
    Cursor.js         custom animated cursor
    Footer.js         footer
    Hero.js           hero / landing section
    Navbar.js         sticky navbar with scroll-spy
    Projects.js       featured projects grid
    Skills.js         skills and technologies
  hooks/
    useInView.js      IntersectionObserver hook
    useTypewriter.js  typewriter effect hook
  styles/
    animations.css    keyframe animations
  content.js          all site data — edit here
  App.js              root component
  index.js            React entry point
```

## Customisation

Edit `src/content.js` to update your name, projects, skills, and stats. No other files need to change.
