import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from '../components/InputField.jsx'
import { useUser } from '../context/UserContext.jsx'

export function RegisterStepTwoPage() {
  const navigate = useNavigate()
  const { signIn } = useUser()
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentForm) => ({ ...currentForm, [name]: value }))
  }

  return (
    <div className="auth-card">
      <p className="eyebrow">Portal do aluno</p>
      <h2>Cadastre-se</h2>
      <p className="lead">
        Passo 2 de 2. Por favor insira seus dados para finalizar e prosseguir.
      </p>

      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault()
          if (!formData.name || !formData.email || !formData.password) {
            setError('Preencha nome, e-mail e senha para finalizar o cadastro.')
            return
          }

          setError('')
          signIn({
            name: formData.name,
            preferredName: formData.name.split(' ')[0] || formData.name,
            email: formData.email,
          })
          navigate('/login')
        }}
      >
        <InputField
          label="Nome"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome completo"
        />

        <InputField
          label="Telefone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(99) 99999-9999"
        />

        <InputField
          label="E-mail"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nome@email.com"
        />

        <InputField
          label="Senha"
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="input-field__error input-field__error--form">{error}</p>}

        <button className="button button--primary" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  )
}
