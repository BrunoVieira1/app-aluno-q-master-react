export function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

export function GridIcon() {
  return (
    <IconBase>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </IconBase>
  )
}

export function BookIcon() {
  return (
    <IconBase>
      <path d="M5 4h10a3 3 0 0 1 3 3v12H8a3 3 0 0 0-3 3V4z" />
      <path d="M18 6h1a1 1 0 0 1 1 1v13" />
    </IconBase>
  )
}

export function BotIcon() {
  return (
    <IconBase>
      <path d="M8 10h8a4 4 0 0 1 4 4v4H4v-4a4 4 0 0 1 4-4z" />
      <path d="M9 6h6" />
      <path d="M9 14h.01M15 14h.01" />
      <path d="M12 2v4" />
    </IconBase>
  )
}

export function UserIcon() {
  return (
    <IconBase>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </IconBase>
  )
}

export function ClockIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  )
}

export function ClipboardIcon() {
  return (
    <IconBase>
      <path d="M9 4h6a2 2 0 0 1 2 2v2H7V6a2 2 0 0 1 2-2z" />
      <path d="M7 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1" />
    </IconBase>
  )
}

export function ChatIcon() {
  return (
    <IconBase>
      <path d="M4 5h16v10H9l-5 4V5z" />
    </IconBase>
  )
}

export function PaperclipIcon() {
  return (
    <IconBase>
      <path d="M7 12.5l7.5-7.5a4 4 0 0 1 5.7 5.6l-9.2 9.2a6 6 0 0 1-8.5-8.5l10-10" />
    </IconBase>
  )
}

export function SendIcon() {
  return (
    <IconBase>
      <path d="M4 12l16-8-4 8 4 8-16-8z" />
    </IconBase>
  )
}

export function VolumeIcon() {
  return (
    <IconBase>
      <path d="M5 14h3l5 4V6l-5 4H5z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
      <path d="M18.5 6.5a8 8 0 0 1 0 11" />
    </IconBase>
  )
}

export function CopyIcon() {
  return (
    <IconBase>
      <path d="M9 9h10v10H9z" />
      <path d="M5 5h10v2" />
    </IconBase>
  )
}

export function RefreshIcon() {
  return (
    <IconBase>
      <path d="M20 12a8 8 0 0 0-14-5" />
      <path d="M4 4v4h4" />
      <path d="M4 12a8 8 0 0 0 14 5" />
      <path d="M20 20v-4h-4" />
    </IconBase>
  )
}

export function FeedbackIcon() {
  return (
    <IconBase>
      <path d="M4 13h4v8H4z" />
      <path d="M8 12l4-6 2 1v5h6l-2 8H8" />
    </IconBase>
  )
}
