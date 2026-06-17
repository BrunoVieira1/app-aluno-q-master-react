import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from '../components/InputField.jsx'

export function ResetPasswordPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' })
  const [error, setError] = useState('')

  return (
    <div className="auth-card">
      <p className="eyebrow">Portal do aluno</p>
      <h2>Nova Senha</h2>
      <p className="lead">Informe abaixo sua nova senha.</p>

      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault()
          if (!formData.password || formData.password !== formData.confirmPassword) {
            setError('As senhas devem ser preenchidas e ser iguais.')
            return
          }

          setError('')
          navigate('/login')
        }}
      >
        <InputField
          label="Senha"
          id="password"
          type="password"
          value={formData.password}
          onChange={(event) => setFormData((currentForm) => ({ ...currentForm, password: event.target.value }))}
        />

        <InputField
          label="Repita a senha"
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData((currentForm) => ({
              ...currentForm,
              confirmPassword: event.target.value,
            }))
          }
        />

        {error && <p className="input-field__error input-field__error--form">{error}</p>}

        <button className="button button--primary" type="submit">
          Salvar
        </button>
      </form>
    </div>
  )
}
