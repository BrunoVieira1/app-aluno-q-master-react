import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { InputField } from '../components/InputField.jsx'
import { useUser } from '../context/UserContext.jsx'

export function LoginPage() {
  const navigate = useNavigate()
  const { signIn } = useUser()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentForm) => ({ ...currentForm, [name]: value }))
    if (error) {
      setError('')
    }
  }

  return (
    <div className="auth-card">
      <p className="eyebrow">Portal do aluno</p>
      <h2>Bem-vindo de volta</h2>
      <p className="lead">
        Por favor, insira suas credenciais para acessar seu painel acadêmico.
      </p>

      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault()

          if (!formData.email || !formData.password) {
            setError('Preencha e-mail e senha para entrar.')
            return
          }

          setError('')
          signIn({
            name: 'João Silva',
            preferredName: 'João',
            email: formData.email,
          })
          navigate('/painel')
        }}
      >
        <InputField
          label="Endereço de e-mail"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="user@email.com"
        />

        <InputField
          label="Senha"
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Sua senha"
        >
          <Link to="/esqueceu-senha">Esqueceu?</Link>
        </InputField>

        {error && <p className="input-field__error input-field__error--form">{error}</p>}

        <button className="button button--primary" type="submit">
          Entrar
        </button>
      </form>

      <p className="auth-form__footer">
        Não tem uma conta? <Link to="/registro">Registre-se agora.</Link>
      </p>
    </div>
  )
}
