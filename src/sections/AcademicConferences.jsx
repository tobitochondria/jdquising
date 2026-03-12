import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { academicConferences } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function AcademicConferences() {
  const [ref, isVisible] = useInView();

  return (
    <section id="conferences" className="section-padding section-alt" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Academic Conferences" icon="bi-people" />
        <div className="timeline">
          {academicConferences.map((conf, i) => (
            <TimelineItem
              key={i}
              title={conf.title}
              subtitle={`${conf.organization}`}
              dateRange={conf.date}
              location={conf.location}
              badge={conf.role}
              items={[conf.topic]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
