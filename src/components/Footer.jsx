import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="fw-bold text-white mb-3">
              {personalInfo.name}, {personalInfo.suffix}
            </h5>
            <p className="text-white-50 mb-0">
              Lawyer &bull; Lecturer &bull; Human Rights Advocate
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex flex-column gap-2 align-items-md-end">
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-white-50 text-decoration-none d-inline-flex align-items-center gap-2 footer-link"
              >
                <i className="bi bi-telephone-fill"></i>
                {personalInfo.phone}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white-50 text-decoration-none d-inline-flex align-items-center gap-2 footer-link"
              >
                <i className="bi bi-envelope-fill"></i>
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="text-center text-white-50 small mb-0">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
