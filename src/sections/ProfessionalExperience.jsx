import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import { experienceCategories } from "../data/portfolioData";
import useInView from "../hooks/useInView";

export default function ProfessionalExperience() {
  const [activeTab, setActiveTab] = useState(experienceCategories[0].key);
  const [ref, isVisible] = useInView();

  const activeCategory = experienceCategories.find(
    (c) => c.key === activeTab
  );

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className={`container fade-in-up ${isVisible ? "visible" : ""}`}>
        <SectionTitle title="Professional Experience" icon="bi-briefcase" />

        {/* Desktop Tabs */}
        <ul className="nav nav-pills nav-fill mb-4 d-none d-md-flex flex-wrap gap-2">
          {experienceCategories.map(({ key, label }) => (
            <li className="nav-item" key={key}>
              <button
                className={`nav-link ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Accordion */}
        <div className="accordion d-md-none mb-4" id="expAccordion">
          {experienceCategories.map(({ key, label, entries }) => (
            <div className="accordion-item border-0 mb-2" key={key}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    activeTab === key ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() =>
                    setActiveTab(activeTab === key ? "" : key)
                  }
                  aria-expanded={activeTab === key}
                >
                  {label}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  activeTab === key ? "show" : ""
                }`}
              >
                <div className="accordion-body px-0">
                  <div className="d-flex flex-column gap-3">
                    {entries.map((entry, i) => (
                      <ExperienceCard key={i} {...entry} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Tab Content */}
        {activeCategory && (
          <div className="d-none d-md-block">
            <div className="row g-3">
              {activeCategory.entries.map((entry, i) => (
                <div className="col-lg-6" key={i}>
                  <ExperienceCard {...entry} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
