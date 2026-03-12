import SectionTitle from "../components/SectionTitle";
import PublicationCard from "../components/PublicationCard";
import { publishedWorks } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function PublishedWorks() {
  const [ref, isVisible] = useInView();

  return (
    <section id="publications" className="section-padding section-alt" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Published Works" icon="bi-journal-richtext" />
        <div className="row g-4">
          {publishedWorks.map((pub, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <PublicationCard {...pub} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
