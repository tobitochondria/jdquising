import SectionTitle from "../components/SectionTitle";
import { academicAwards } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function AcademicAwards() {
  const [ref, isVisible] = useInView();

  return (
    <section id="awards" className="section-padding" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Academic Awards" icon="bi-trophy" />
        <div className="row g-4">
          {academicAwards.map((award, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card award-card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="bi bi-award text-accent fs-5"></i>
                    {award.organization}
                  </h6>
                  <ul className="list-unstyled mb-0">
                    {award.items.map((item, j) => (
                      <li key={j} className="mb-2 d-flex small">
                        <i className="bi bi-star-fill text-warning me-2 mt-1 flex-shrink-0 small"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
