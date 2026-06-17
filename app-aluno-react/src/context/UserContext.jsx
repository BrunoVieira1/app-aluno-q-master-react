import { createContext, useContext, useMemo, useState } from 'react'

const UserContext = createContext(null)

const DEFAULT_USER = {
  name: 'João Silva',
  preferredName: 'João',
  email: 'joao.silva@satc.edu.br',
  course: 'Engenharia de Software',
  year: '3º Ano',
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(DEFAULT_USER)

  const value = useMemo(
    () => ({
      user,
      signIn: (nextUser) => {
        setUser((currentUser) => ({ ...currentUser, ...nextUser }))
      },
    }),
    [user],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}
