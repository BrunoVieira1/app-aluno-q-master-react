import { useEffect, useState } from 'react'
import { Card } from './Card.jsx'

export function RemoteHighlightsCard() {
  const [state, setState] = useState({ loading: true, data: [], error: '' })

  useEffect(() => {
    let active = true

    async function loadPosts() {
      setState({ loading: true, data: [], error: '' })

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')

        if (!response.ok) {
          throw new Error(`Falha ao carregar dados: ${response.status}`)
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

    loadPosts()

    return () => {
      active = false
    }
  }, [])

  return (
    <Card className="remote-card">
      <header className="remote-card__header">
        <div>
          <span className="eyebrow">API externa</span>
          <h2>Destaques do estudo</h2>
        </div>
        <p>Exemplo com `loading`, `erro` e `dados` via `fetch`.</p>
      </header>

      {state.loading && <p className="remote-card__state">Carregando destaques...</p>}

      {!state.loading && state.error && (
        <p className="remote-card__state remote-card__state--error">{state.error}</p>
      )}

      {!state.loading && !state.error && (
        <ul className="remote-card__list">
          {state.data.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
