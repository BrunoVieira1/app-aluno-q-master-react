import { useState } from 'react'
import {
  CopyIcon,
  FeedbackIcon,
  PaperclipIcon,
  RefreshIcon,
  SendIcon,
  VolumeIcon,
} from '../components/Icons.jsx'
import { TUTOR_INITIAL_MESSAGES } from '../data/portalData.js'

export function TutorPage() {
  const [draftMessage, setDraftMessage] = useState('Explique computação quântica')
  const [chatMessages, setChatMessages] = useState(TUTOR_INITIAL_MESSAGES)

  const sendMessage = () => {
    const content = draftMessage.trim()

    if (!content) {
      return
    }

    setChatMessages((currentMessages) => [
      ...currentMessages,
      {
        id: currentMessages.length + 1,
        role: 'user',
        author: 'João Silva',
        content,
      },
      {
        id: currentMessages.length + 2,
        role: 'assistant',
        author: 'Tutor IA',
        content: buildTutorReply(content),
      },
    ])
    setDraftMessage('')
  }

  return (
    <section className="screen tutor-screen">
      <div className="chat-thread" aria-label="Conversa com o tutor IA">
        {chatMessages.map((message) => (
          <article key={message.id} className={`chat-message chat-message--${message.role}`}>
            <div className="chat-message__avatar" aria-hidden="true">
              {message.role === 'assistant' ? 'AI' : 'J'}
            </div>
            <div className="chat-message__content">
              <strong>{message.author}</strong>
              <p>{message.content}</p>

              {message.role === 'assistant' && (
                <div className="chat-actions" aria-label="Ações da resposta">
                  <ActionIconButton label="Ouvir resposta" icon={VolumeIcon} />
                  <ActionIconButton label="Copiar resposta" icon={CopyIcon} />
                  <ActionIconButton label="Regerar resposta" icon={RefreshIcon} />
                  <ActionIconButton label="Responder melhor" icon={FeedbackIcon} />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="tutor-composer">
        <button className="composer__attach" type="button" aria-label="Anexar arquivo">
          <PaperclipIcon />
        </button>

        <input
          type="text"
          value={draftMessage}
          onChange={(event) => setDraftMessage(event.target.value)}
          placeholder="Pergunte alguma coisa"
          aria-label="Pergunte alguma coisa"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              sendMessage()
            }
          }}
        />

        <button className="composer__send" type="button" onClick={sendMessage}>
          <SendIcon />
        </button>
      </div>

      <p className="tutor-note">
        O Tutor pode cometer erros. Considere verificar informações importantes.
      </p>
    </section>
  )
}

function ActionIconButton({ label, icon: Icon }) {
  return (
    <button className="icon-button" type="button" aria-label={label}>
      <Icon />
    </button>
  )
}

function buildTutorReply(message) {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('quântica') || lowerMessage.includes('quantica')) {
    return 'Em resumo: computação quântica usa qubits e explora superposição e emaranhamento para resolver certos problemas de forma diferente da computação clássica.'
  }

  if (lowerMessage.includes('front-end') || lowerMessage.includes('frontend')) {
    return 'Front-end é a camada visual e interativa da aplicação: estrutura, estilo e comportamento que o usuário vê no navegador.'
  }

  return 'Posso detalhar isso em tópicos, exemplos práticos ou passo a passo se você quiser.'
}
