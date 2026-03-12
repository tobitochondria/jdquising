import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { speakingEngagements } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function SpeakingEngagements() {
  const [ref, isVisible] = useInView();

  return (
    <section id="speaking" className="section-padding" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Speaking Engagements" icon="bi-mic" />
        <div className="timeline">
          {speakingEngagements.map((s, i) => (
            <TimelineItem
              key={i}
              title={s.title}
              subtitle={s.organization}
              dateRange={s.date}
              location={s.location}
              badge={s.role}
              items={[s.topic]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
