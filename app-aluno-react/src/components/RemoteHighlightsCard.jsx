import { useEffect, useState } from 'react'
import { Card } from './Card.jsx'
import { useUser } from '../context/UserContext.jsx'

export function RemoteHighlightsCard() {
  const { user } = useUser()
  const [state, setState] = useState({ loading: true, data: [], error: '' })

  useEffect(() => {
    let active = true

    async function loadRepos() {
      setState({ loading: true, data: [], error: '' })

      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(user.githubUsername)}/repos?sort=updated&per_page=3`,
        )

        if (!response.ok) {
          throw new Error(`GitHub respondeu com status ${response.status}`)
        }

        const data = await response.json()

        if (active) {
          setState({ loading: false, data, error: '' })
        }
      } catch (error) {
        if (active) {
          setState({
            loading: false,
            data: [],
            error: error instanceof Error ? error.message : 'Erro inesperado ao carregar dados',
          })
        }
      } finally {
        if (active) {
          setState((currentState) => ({ ...currentState, loading: false }))
        }
      }
    }

          loadRepos()

    return () => {
      active = false
    }
        }, [user.githubUsername])

  return (
    <Card className="remote-card">
      <header className="remote-card__header">
        <div>
                <span className="eyebrow">GitHub API</span>
                <h2>Repositórios recentes</h2>
        </div>
             
      </header>

      {state.loading && <p className="remote-card__state">Carregando destaques...</p>}

      {!state.loading && state.error && (
        <p className="remote-card__state remote-card__state--error">{state.error}</p>
      )}

      {!state.loading && !state.error && (
        <ul className="remote-card__list">
          {state.data.map((repo) => (
            <li key={repo.id}>
              <strong>{repo.name}</strong>
              <p>{repo.description || 'Sem descrição informada.'}</p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
