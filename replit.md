# Pro News Website

A professional news website built with React and Vite. Displays a responsive grid of news articles with categories, dates, and summaries.

## Tech Stack

- **Frontend:** React 18 + Vite 5
- **Styling:** Plain CSS with CSS variables, Flexbox/Grid
- **Package Manager:** npm

## Project Structure

```
pro-news-website/       # Main frontend app
  src/
    App.jsx             # Root component with article data
    main.jsx            # React entry point
    styles.css          # Global styles
    components/
      Newscard.jsx      # Individual news card component
  vite.config.js        # Vite config (host 0.0.0.0, port 5000)
  index.html            # HTML entry point
  package.json
```

## Development

The app runs on port 5000 via the "Start application" workflow:
```
cd pro-news-website && npm run dev
```

## Deployment

Configured as a static site deployment:
- Build: `cd pro-news-website && npm run build`
- Public directory: `pro-news-website/dist`
