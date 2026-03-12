import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { education } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className="section-padding section-alt" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Education" icon="bi-mortarboard" />
        <div className="timeline">
          {education.map((item, i) => (
            <TimelineItem
              key={i}
              title={item.institution}
              subtitle={item.degree}
              dateRange={item.dateRange}
              items={item.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
