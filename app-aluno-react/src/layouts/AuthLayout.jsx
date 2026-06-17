import { Outlet } from 'react-router-dom'
import { AUTH_QUOTE } from '../data/portalData.js'

export function AuthLayout() {
  return (
    <main className="auth-layout">
      <section className="auth-hero">
        <div className="auth-hero__copy">
          <h1>
            {AUTH_QUOTE.text}
          </h1>
          <p>{AUTH_QUOTE.author}</p>
        </div>
      </section>

      <section className="auth-form-panel">
        <Outlet />
      </section>
    </main>
  )
}
