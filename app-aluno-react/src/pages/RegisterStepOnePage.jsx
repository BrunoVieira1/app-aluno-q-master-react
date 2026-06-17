import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from '../components/InputField.jsx'

export function RegisterStepOnePage() {
  const navigate = useNavigate()
  const [cpf, setCpf] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="auth-card">
      <p className="eyebrow">Portal do aluno</p>
      <h2>Cadastre-se</h2>
      <p className="lead">
        Passo 1 de 2. Por favor insira seu CPF para prosseguir.
      </p>

      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault()

          if (!cpf) {
            setError('Informe seu CPF para continuar.')
            return
          }

          setError('')
          navigate('/registro/continuar')
        }}
      >
        <InputField
          label="CPF"
          id="cpf"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
          placeholder="000.000.000-00"
        />

        {error && <p className="input-field__error input-field__error--form">{error}</p>}

        <button className="button button--primary" type="submit">
          Prosseguir
        </button>
      </form>
    </div>
  )
}
