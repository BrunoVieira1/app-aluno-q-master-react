import { Card } from './Card.jsx'

export function DisciplinaCard({ title, teacher, badge, progressLabel, progress, action, onAction }) {
  return (
    <Card className="discipline-card">
      <div className="discipline-card__top">
        <div>
          <h2>{title}</h2>
          <p>{teacher}</p>
        </div>
        <span className="badge badge--soft">{badge}</span>
      </div>

      <div className="progress-line">
        <div className="progress-line__header">
          <span>{progressLabel}</span>
          <strong>{progress}%</strong>
        </div>
        <div className="progress-bar progress-bar--soft">
          <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <button className="button button--primary button--full" type="button" onClick={onAction}>
        {action}
      </button>
    </Card>
  )
}
