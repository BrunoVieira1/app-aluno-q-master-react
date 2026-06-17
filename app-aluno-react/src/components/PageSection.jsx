export function PageSection({ title, subtitle, children, className = '' }) {
  return (
    <section className={`page-section ${className}`.trim()}>
      <header className="page-section__header">
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </header>
      {children}
    </section>
  )
}
