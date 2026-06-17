import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'
import { NAV_ITEMS } from '../data/portalData.js'

export function Sidebar() {
  const { user } = useUser()

  return (
    <aside className="sidebar">
      <section className="sidebar__user">
        <div className="profile-avatar profile-avatar--small" aria-hidden="true">
          {getInitials(user.name)}
        </div>
        <div>
          <strong>{user.name}</strong>
          <p>
            {user.course} • {user.year}
          </p>
        </div>
      </section>

      <nav className="sidebar__nav" aria-label="Atalhos do portal">
        {NAV_ITEMS.map(({ path, label }) => (
          <Link key={path} to={path}>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
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
