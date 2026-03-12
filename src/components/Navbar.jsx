import { useState, useEffect, useCallback } from "react";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Collapse mobile menu
      const toggler = document.querySelector(".navbar-toggler");
      const collapse = document.querySelector(".navbar-collapse");
      if (collapse?.classList.contains("show")) {
        toggler?.click();
      }
    }
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled ? "navbar-scrolled shadow-sm" : ""
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#about"
          onClick={(e) => handleNavClick(e, "#about")}
        >
          <i className="bi bi-briefcase-fill me-2"></i>
          JDQ
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <a
                  className={`nav-link nav-link-animated ${
                    activeLink === href ? "active" : ""
                  }`}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
