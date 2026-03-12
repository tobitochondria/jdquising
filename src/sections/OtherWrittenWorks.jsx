import SectionTitle from "../components/SectionTitle";
import WrittenWorkItem from "../components/WrittenWorkItem";
import { opinionPieces, workingPapers } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function OtherWrittenWorks() {
  const [ref, isVisible] = useInView();

  return (
    <section id="writings" className="section-padding section-alt" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Other Written Works" icon="bi-pen" />

        {/* Opinion Pieces */}
        <h4 className="fw-semibold mb-3">
          <i className="bi bi-newspaper text-accent me-2"></i>
          Opinion Pieces
        </h4>
        <div className="row g-3 mb-5">
          {opinionPieces.map((op, i) => (
            <div className="col-md-6" key={i}>
              <WrittenWorkItem {...op} />
            </div>
          ))}
        </div>

        {/* Working Papers & Research Contributions */}
        <h4 className="fw-semibold mb-3">
          <i className="bi bi-file-earmark-text text-accent me-2"></i>
          Working Papers &amp; Research Contributions
        </h4>
        <div className="row g-3">
          {workingPapers.map((wp, i) => (
            <div className="col-md-6" key={i}>
              <div className="card border-0 shadow-sm working-paper-card">
                <div className="card-body">
                  <h6 className="fw-semibold mb-2">{wp.title}</h6>
                  {wp.note && (
                    <span className="badge bg-primary-subtle text-primary-emphasis mb-2">
                      {wp.note}
                    </span>
                  )}
                  <div>
                    <a
                      href={wp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent d-inline-flex align-items-center gap-1 small"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                      View Paper
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
