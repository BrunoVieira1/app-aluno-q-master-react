import { useEffect, useMemo, useState } from 'react'
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
  const { user, signIn } = useUser()
  const [profileState, setProfileState] = useState({ loading: true, data: null, error: '' })
  const greeting = useMemo(() => getGreeting(new Date().getHours()), [])
  const currentDateTime = useMemo(() => formatCurrentDateTime(new Date()), [])

  useEffect(() => {
    let active = true

    async function loadGitHubProfile() {
      setProfileState({ loading: true, data: null, error: '' })

      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(user.githubUsername)}`,
        )

        if (!response.ok) {
          throw new Error(`GitHub respondeu com status ${response.status}`)
        }

        const data = await response.json()

        if (active) {
          setProfileState({ loading: false, data, error: '' })
          signIn({
            displayName: data.name || data.login,
            name: data.name || data.login,
            avatarUrl: data.avatar_url,
            bio: data.bio || '',
            location: data.location || '',
          })
        }
      } catch (error) {
        if (active) {
          setProfileState({
            loading: false,
            data: null,
            error: error instanceof Error ? error.message : 'Erro inesperado ao buscar perfil do GitHub',
          })
        }
      } finally {
        if (active) {
          setProfileState((currentState) => ({ ...currentState, loading: false }))
        }
      }
    }

    loadGitHubProfile()

    return () => {
      active = false
    }
  }, [signIn, user.githubUsername])

  const displayName = profileState.data?.name || profileState.data?.login || user.displayName
  const avatarUrl = profileState.data?.avatar_url || user.avatarUrl

  return (
    <PageSection
      title={`${greeting}, ${displayName}.`}
      subtitle="Bem-vindo de volta à sua sessão de estudo focado. Você tem 2 tarefas para esta semana e está atualmente adiantado em seu cronograma de leitura."
      className="screen"
    >
      <p className="screen__meta">{currentDateTime}</p>

      <Card className="github-profile-card">
        <div className="github-profile-card__avatar" aria-hidden="true">
          {avatarUrl ? <img src={avatarUrl} alt="" /> : <span>{getInitials(displayName)}</span>}
        </div>

        <div className="github-profile-card__content">
          <span className="eyebrow">Perfil do GitHub</span>
          <h2>{displayName}</h2>
          <p>@{user.githubUsername}</p>
          {profileState.loading && <p className="github-profile-card__state">Carregando perfil...</p>}
          {!profileState.loading && profileState.error && (
            <p className="github-profile-card__state github-profile-card__state--error">
              {profileState.error}
            </p>
          )}
          {!profileState.loading && !profileState.error && profileState.data && (
            <p className="github-profile-card__bio">
              {profileState.data.bio || 'Sem biografia cadastrada no GitHub.'}
            </p>
          )}
        </div>
      </Card>

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

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}
