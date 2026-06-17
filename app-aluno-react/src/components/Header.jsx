import { NavLink, Link } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'
import { NAV_ITEMS } from '../data/portalData.js'
import { BookIcon, BotIcon, GridIcon, UserIcon } from './Icons.jsx'

const ICONS = {
  grid: GridIcon,
  book: BookIcon,
  bot: BotIcon,
  user: UserIcon,
}

export function Header() {
  const { user } = useUser()

  return (
    <header className="topbar">
      <div className="topbar__inner page-grid">
        <Link className="brand" to="/painel">
          <strong>Academia</strong>
          <span>{user.course}</span>
        </Link>

        <nav className="nav" aria-label="Navegação principal">
          {NAV_ITEMS.map(({ path, label, icon }) => {
            const Icon = ICONS[icon]

            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `nav__item${isActive ? ' nav__item--active' : ''}`}
              >
                {({ isActive }) => (
                  <>
                    <Icon />
                    <span className={isActive ? 'nav__label nav__label--active' : 'nav__label'}>
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
