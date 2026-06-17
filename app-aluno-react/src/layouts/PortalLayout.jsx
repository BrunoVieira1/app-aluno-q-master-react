import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header.jsx'
import { Sidebar } from '../components/Sidebar.jsx'

export function PortalLayout() {
  return (
    <div className="app-layout">
      <Header />

      <main className="portal-grid page-grid page-content">
        <Sidebar />
        <div className="portal-grid__content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
