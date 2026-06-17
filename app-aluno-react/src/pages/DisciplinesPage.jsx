import { DISCIPLINES } from '../data/portalData.js'
import { DisciplinaCard } from '../components/DisciplinaCard.jsx'
import { PageSection } from '../components/PageSection.jsx'

export function DisciplinesPage() {
  return (
    <PageSection title="Minhas Disciplinas" className="screen">
      <div className="discipline-grid" aria-label="Lista de disciplinas">
        {DISCIPLINES.map((discipline) => (
          <DisciplinaCard
            key={discipline.title}
            title={discipline.title}
            teacher={discipline.teacher}
            badge={discipline.badge}
            progressLabel={discipline.progressLabel}
            progress={discipline.progress}
            action={discipline.action}
            onAction={() => undefined}
          />
        ))}
      </div>
    </PageSection>
  )
}
