import { personalInfo } from "../data/portfolioData";
import profilePhoto from "../assets/images/my-photo.jpeg";
import heroBg from "../assets/images/hero-banner.jpeg";

export default function HeroBanner() {
  return (
    <section
      id="about"
      className="hero-banner d-flex align-items-center min-vh-100"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.93) 0%, rgba(234,242,234,0.92) 60%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Profile Photo */}
          <div className="col-lg-4 text-center">
            <img
              src={profilePhoto}
              alt="Josiah David F. Quising"
              className="profile-photo mx-auto d-block"
            />
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
