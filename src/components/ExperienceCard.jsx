export default function ExperienceCard({
  organization,
  dateRange,
  role,
  descriptions,
}) {
  return (
    <div className="card experience-card h-100 border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-1">{organization}</h5>
        <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
          <span className="badge bg-primary-subtle text-primary-emphasis">
            <i className="bi bi-calendar3 me-1"></i>
            {dateRange}
          </span>
          {role && (
            <span className="badge bg-accent text-white">
              {role}
            </span>
          )}
        </div>
        <ul className="list-unstyled mb-0">
          {descriptions.map((desc, i) => (
            <li key={i} className="mb-1 d-flex">
              <i className="bi bi-chevron-right text-accent me-2 mt-1 flex-shrink-0"></i>
              <span className="text-secondary-emphasis">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
