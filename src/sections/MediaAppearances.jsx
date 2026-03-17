import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { mediaAppearances } from "../data/portfolioData";
import useInView from "../hooks/useInView";

const CATEGORIES = [
  {
    key: "interviews",
    label: "Radio & News Reports",
    icon: "bi-mic",
    data: mediaAppearances.interviews,
  },
  {
    key: "broadcastVideos",
    label: "Broadcast & Video",
    icon: "bi-camera-video",
    data: mediaAppearances.broadcastVideos,
  },
  {
    key: "newsFeatures",
    label: "News Features",
    icon: "bi-newspaper",
    data: mediaAppearances.newsFeatures,
  },
];

export default function MediaAppearances() {
  const [ref, isVisible] = useInView();
  const [activeTab, setActiveTab] = useState("interviews");

  const activeCategory = CATEGORIES.find((c) => c.key === activeTab);

  return (
    <section id="media" className="section-padding" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Media Appearances &amp; Interviews" icon="bi-camera-video" />

        {/* Category Tabs */}
        <ul className="nav nav-pills justify-content-center flex-wrap gap-2 mb-4">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <li className="nav-item" key={cat.key}>
                <button
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTab(cat.key)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <i className={`bi ${cat.icon} me-2`}></i>
                  {cat.label}
                  <span
                    className={`ms-2 badge ${
                      isActive ? "bg-white text-accent" : "bg-light text-muted"
                    }`}
                  >
                    {cat.data.length}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Media Cards */}
        <div className="row g-3">
          {activeCategory.data.map((item, i) => (
            <div className="col-12 col-md-6" key={i}>
              <div className="card media-card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column gap-2">
                  <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                    <span className="badge bg-accent text-white">{item.outlet}</span>
                    {item.date && item.date !== "n.d." && (
                      <span className="badge bg-primary-subtle text-primary-emphasis flex-shrink-0">
                        <i className="bi bi-calendar3 me-1"></i>
                        {item.date}
                      </span>
                    )}
                  </div>
                  <p className="fw-semibold mb-0 flex-grow-1 small lh-base text-body">
                    {item.title}
                  </p>
                  <div className="pt-1 mt-auto d-flex flex-wrap gap-3">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent d-inline-flex align-items-center gap-1 small fw-medium"
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                        View Source
                      </a>
                    ) : (
                      <span className="text-muted small fst-italic">No link available</span>
                    )}
                    {item.reelUrl && (
                      <a
                        href={item.reelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent d-inline-flex align-items-center gap-1 small fw-medium"
                      >
                        <i className="bi bi-play-circle"></i>
                        Interview Reel
                      </a>
                    )}
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
