export default function TimelineItem({
  title,
  subtitle,
  dateRange,
  items,
  location,
  badge,
  logo,
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center gap-3 mb-1">
            {logo && (
              <img
                src={logo}
                alt={`${title} logo`}
                className="institution-logo flex-shrink-0"
              />
            )}
            <h6 className="fw-semibold mb-0">{title}</h6>
          </div>
          {subtitle && (
            <p className="text-muted small mb-1 fst-italic">{subtitle}</p>
          )}
          <div className="d-flex flex-wrap gap-2 mb-2">
            {dateRange && (
              <span className="badge bg-primary-subtle text-primary-emphasis">
                <i className="bi bi-calendar3 me-1"></i>
                {dateRange}
              </span>
            )}
            {location && (
              <span className="badge bg-light text-dark">
                <i className="bi bi-geo-alt me-1"></i>
                {location}
              </span>
            )}
            {badge && (
              <span className="badge bg-accent text-white">{badge}</span>
            )}
          </div>
          {items && items.length > 0 && (
            <ul className="list-unstyled mb-0">
              {items.map((item, i) => (
                <li key={i} className="mb-1 d-flex small">
                  <i className="bi bi-dot text-accent me-1 flex-shrink-0 fs-5 lh-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
