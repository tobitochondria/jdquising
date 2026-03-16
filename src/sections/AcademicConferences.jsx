import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { academicConferences } from "../data/portfolioData";
import useInView from "../hooks/useInView";

function groupByYear(entries) {
  const groups = {};
  entries.forEach((entry) => {
    const match = entry.date.match(/(\d{4})/);
    const year = match ? match[1] : "Other";
    if (!groups[year]) groups[year] = [];
    groups[year].push(entry);
  });
  return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
}

export default function AcademicConferences() {
  const [ref, isVisible] = useInView();
  const grouped = groupByYear(academicConferences);

  return (
    <section id="conferences" className="section-padding section-alt" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Academic Conferences" icon="bi-people" />
        <div className="accordion" id="conferencesAccordion">
          {grouped.map(([year, entries], idx) => {
            const collapseId = `conf-collapse-${year}`;
            const headingId = `conf-heading-${year}`;
            const isOpen = idx === 0;
            return (
              <div className="accordion-item border-0 mb-2 shadow-sm rounded" key={year}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button rounded ${isOpen ? "" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    <span className="fw-semibold">{year}</span>
                    <span className="ms-2 badge bg-accent text-white">{entries.length}</span>
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                  aria-labelledby={headingId}
                  data-bs-parent="#conferencesAccordion"
                >
                  <div className="accordion-body pt-2">
                    <div className="timeline">
                      {entries.map((conf, i) => (
                        <TimelineItem
                          key={i}
                          title={conf.title}
                          subtitle={conf.organization}
                          dateRange={conf.date}
                          location={conf.location}
                          badge={conf.role}
                          items={[conf.topic]}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
