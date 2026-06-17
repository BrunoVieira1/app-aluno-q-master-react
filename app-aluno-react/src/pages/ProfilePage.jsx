import { PROFILE_FIELDS } from '../data/portalData.js'
import { Card } from '../components/Card.jsx'
import { PageSection } from '../components/PageSection.jsx'
import { useUser } from '../context/UserContext.jsx'

export function ProfilePage() {
  const { user } = useUser()

  return (
    <PageSection title={user.name} subtitle={`${user.course} • ${user.year}`} className="screen profile-screen">
      <header className="profile-hero">
        <div className="profile-avatar" aria-hidden="true">
          {getInitials(user.name)}
        </div>
      </header>

      <div className="tabs" role="tablist" aria-label="Seções do perfil">
        <button className="tabs__item tabs__item--active" type="button">
          Dados Pessoais
        </button>
        <button className="tabs__item" type="button">
          Configurações
        </button>
        <button className="tabs__item" type="button">
          Segurança
        </button>
      </div>

      <Card className="profile-card" aria-label="Dados pessoais">
        {PROFILE_FIELDS.map(([label, value]) => (
          <div className="profile-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </Card>
    </PageSection>
  )
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
