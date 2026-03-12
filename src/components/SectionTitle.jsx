export default function SectionTitle({ title, icon }) {
  return (
    <div className="section-title-wrapper mb-4">
      <h2 className="section-title">
        {icon && <i className={`bi ${icon} me-2`}></i>}
        {title}
      </h2>
    </div>
  );
}
