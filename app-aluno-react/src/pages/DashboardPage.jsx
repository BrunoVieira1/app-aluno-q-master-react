import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'
import { DASHBOARD_COURSES, DASHBOARD_STATS } from '../data/portalData.js'
import { ChatIcon, ClipboardIcon, ClockIcon } from '../components/Icons.jsx'
import { Card } from '../components/Card.jsx'
import { PageSection } from '../components/PageSection.jsx'
import { RemoteHighlightsCard } from '../components/RemoteHighlightsCard.jsx'

const ICONS = {
  clock: ClockIcon,
  clipboard: ClipboardIcon,
  chat: ChatIcon,
}

export function DashboardPage() {
  const navigate = useNavigate()
  const { user } = useUser()
  const greeting = useMemo(() => getGreeting(new Date().getHours()), [])
  const currentDateTime = useMemo(() => formatCurrentDateTime(new Date()), [])

  return (
    <PageSection
      title={`${greeting}, ${user.preferredName}.`}
      subtitle="Bem-vindo de volta à sua sessão de estudo focado. Você tem 2 tarefas para esta semana e está atualmente adiantado em seu cronograma de leitura."
      className="screen"
    >
      <p className="screen__meta">{currentDateTime}</p>

      <div className="stack">
        {DASHBOARD_COURSES.map((course) => (
          <Card className="course-card" key={course.title}>
            <div className="course-card__body">
              <span className="badge">{course.badge}</span>
              <h2>{course.title}</h2>
              <p>{course.description}</p>

              <div className="progress-block" aria-label={`Progresso do curso ${course.title}`}>
                <div className="progress-bar">
                  <div className="progress-bar__fill" style={{ width: `${course.progress}%` }} />
                </div>
                <span>{course.progress}%</span>
              </div>
            </div>

            <button
              className="button button--primary button--course"
              type="button"
              onClick={() => navigate('/disciplinas')}
            >
              {course.action}
            </button>
          </Card>
        ))}
      </div>

      <section className="stat-grid" aria-label="Indicadores do aluno">
        {DASHBOARD_STATS.map((item) => {
          const Icon = ICONS[item.icon]

          return (
            <article className="stat-card" key={item.label}>
              <div className="stat-card__header">
                <Icon />
                <span>{item.label}</span>
              </div>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          )
        })}
      </section>
      <RemoteHighlightsCard />
    </PageSection>
  )
}

function getGreeting(hour) {
  if (hour < 12) {
    return 'Bom dia'
  }

  if (hour < 18) {
    return 'Boa tarde'
  }

  return 'Boa noite'
}

function formatCurrentDateTime(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
