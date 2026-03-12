export default function PublicationCard({ journal, title, citation, url }) {
  return (
    <div className="card publication-card h-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column">
        <span className="badge bg-accent text-white mb-2 align-self-start">
          {journal}
        </span>
        <h6 className="card-title fw-semibold">{title}</h6>
        <p className="text-muted small mb-2">{citation}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto link-accent d-inline-flex align-items-center gap-1"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            View Publication
          </a>
        )}
      </div>
    </div>
  );
}
