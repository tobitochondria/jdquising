import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { shortCourses } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function ShortCourses() {
  const [ref, isVisible] = useInView();

  return (
    <section id="courses" className="section-padding" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Short Courses" icon="bi-book" />
        <div className="timeline">
          {shortCourses.map((course, i) => (
            <TimelineItem
              key={i}
              title={course.title}
              subtitle={course.institution}
              dateRange={course.dateRange}
              items={course.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
