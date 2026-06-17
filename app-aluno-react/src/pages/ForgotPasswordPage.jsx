import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from '../components/InputField.jsx'

export function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="auth-card">
      <p className="eyebrow">Portal do aluno</p>
      <h2>Esqueci minha senha</h2>
      <p className="lead">Informe seu e-mail para enviarmos o link para redefinir sua senha.</p>

      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault()
          if (!email) {
            setError('Informe um e-mail para continuar.')
            return
          }
          setError('')
          navigate('/nova-senha')
        }}
      >
        <InputField
          label="Endereço de e-mail"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="user@email.com"
        />

        {error && <p className="input-field__error input-field__error--form">{error}</p>}

        <button className="button button--primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  )
}
