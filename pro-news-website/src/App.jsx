import NewsCard from './components/Newscard.jsx';
import './styles.css';

const featured = {
  title: 'Pro News: Today\u2019s top story',
  category: 'World',
  date: 'March 29, 2026',
  content: 'Stay informed with the latest headlines and expert summaries from the world of news. Our editors bring you the most impactful stories of the day, curated for clarity and depth.'
};

const articles = [
  {
    title: 'Technology update',
    category: 'Tech',
    date: 'March 29, 2026',
    content: 'New tools and trends are shaping the future of news publishing and consumption.'
  },
  {
    title: 'Market analysis',
    category: 'Business',
    date: 'March 29, 2026',
    content: 'Keep track of the economy with quick market overviews and expert commentary.'
  },
  {
    title: 'Culture & society',
    category: 'Culture',
    date: 'March 29, 2026',
    content: 'How shifting social dynamics are redefining what it means to be informed in the modern age.'
  }
];

export default function App() {
  return (
    <div className="app-shell">

      <header className="masthead">
        <div className="masthead-name">PRO<span>.</span>NEWS</div>
        <div className="masthead-date">Sunday &mdash; March 29, 2026</div>
      </header>

      <div className="ticker-bar">Breaking &mdash; Latest stories updated hourly &mdash; Edition No. 1</div>

      <section className="hero-article">
        <div>
          <span className="hero-label">Featured Story</span>
          <h1 className="hero-title">{featured.title}</h1>
          <div className="hero-meta">{featured.category} &bull; {featured.date}</div>
          <p className="hero-content">{featured.content}</p>
        </div>
        <div className="hero-image-placeholder">
          <span className="hero-image-tag">Photo / Illustration</span>
        </div>
      </section>

      <div className="section-label">More Stories</div>

      <section className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </section>

      <footer className="footer-strip">
        <strong>Pro.News</strong>
        <span>All rights reserved &mdash; 2026</span>
      </footer>

    </div>
  );
}
