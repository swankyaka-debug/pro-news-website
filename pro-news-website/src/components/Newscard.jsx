export default function NewsCard({ article }) {
  return (
    <div className="card">
      <span className="card-category">{article.category}</span>
      <div className="card-divider"></div>
      <h2>{article.title}</h2>
      <p className="meta">{article.date}</p>
      <p>{article.content}</p>
    </div>
  );
}
