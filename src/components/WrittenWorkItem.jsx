export default function WrittenWorkItem({ outlet, outletDescription, articles, logo }) {
  return (
    <div className="written-work-item card border-0 shadow-sm mb-3">
      <div className="card-body">
        {logo && (
          <img
            src={logo}
            alt={`${outlet} logo`}
            className="outlet-logo mb-2 d-block"
          />
        )}
        <h6 className="fw-bold mb-0">{outlet}</h6>
        {outletDescription && (
          <p className="text-muted small mb-2 fst-italic">
            {outletDescription}
          </p>
        )}
        <ul className="list-unstyled mb-0">
          {articles.map((article, i) => (
            <li key={i} className="mb-2 d-flex align-items-start">
              <i className="bi bi-pencil-square text-accent me-2 mt-1 flex-shrink-0"></i>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-body-emphasis link-underline-opacity-25 link-underline-opacity-100-hover written-work-link"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
