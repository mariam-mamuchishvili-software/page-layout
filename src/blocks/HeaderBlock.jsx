export default function HeaderBlock({ title, subtitle }) {
  return (
    <header data-layout-structure="block">
      <h2 className="section-title" data-content="title">
        {title}
      </h2>
      <h4 className="section-subtitle" data-content="subtitle">
        {subtitle}
      </h4>
    </header>
  );
}
