import { personalInfo } from "../data/portfolioData";

export default function HeroBanner() {
  return (
    <section
      id="about"
      className="hero-banner d-flex align-items-center min-vh-100"
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Profile Image Placeholder */}
          <div className="col-lg-4 text-center">
            <div className="profile-placeholder mx-auto">
              <i className="bi bi-person-fill"></i>
            </div>
          </div>

          {/* Info */}
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-1">
              {personalInfo.name}
              <span className="text-accent">, {personalInfo.suffix}</span>
            </h1>
            <p className="lead text-muted mb-3">
              Lawyer &bull; Lecturer &bull; Human Rights Advocate
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a
                href={`tel:${personalInfo.phone}`}
                className="d-inline-flex align-items-center gap-2 text-decoration-none text-body"
              >
                <i className="bi bi-telephone-fill text-accent"></i>
                {personalInfo.phone}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="d-inline-flex align-items-center gap-2 text-decoration-none text-body"
              >
                <i className="bi bi-envelope-fill text-accent"></i>
                {personalInfo.email}
              </a>
            </div>

            <p className="mb-4 lh-lg">{personalInfo.summary}</p>

            <div className="d-flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-accent btn-lg px-4"
              >
                <i className="bi bi-envelope me-2"></i>
                Contact Me
              </a>
              <a href="#experience" className="btn btn-outline-accent btn-lg px-4">
                <i className="bi bi-arrow-down me-2"></i>
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
