import SectionTitle from "../components/SectionTitle";
import { fellowships } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function Fellowships() {
  const [ref, isVisible] = useInView();

  return (
    <section id="fellowships" className="section-padding section-alt" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Fellowships" icon="bi-patch-check" />
        <div className="row g-4">
          {fellowships.map((f, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card fellowship-card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h6 className="fw-bold mb-1">{f.title}</h6>
                  <span className="badge bg-accent text-white mb-3 align-self-start">
                    {f.organization}
                  </span>
                  <ul className="list-unstyled mb-0">
                    {f.details.map((d, j) => (
                      <li key={j} className="mb-1 d-flex small">
                        <i className="bi bi-check-circle text-accent me-2 mt-1 flex-shrink-0"></i>
                        <span>{d}</span>
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
