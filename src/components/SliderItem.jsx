export default function SliderItem({ src, title, excerpt }) {
  return (
    <div className="slider-item" data-layout-structure="component">
      <img src={src} alt="" data-layout-structure="component" />
      <div className="slider-content">
        <h4 className="post-title-text">{title}</h4>
        <p className="post-excerpt">{excerpt}</p>
      </div>
    </div>
  )
}
