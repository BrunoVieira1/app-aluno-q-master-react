import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const UserContext = createContext(null)

const STORAGE_KEY = 'app-aluno-github-username'

const DEFAULT_USER = {
  githubUsername: 'octocat',
  displayName: 'octocat',
  name: 'octocat',
  avatarUrl: '',
  bio: '',
  location: '',
  course: 'Engenharia de Software',
}

function readStoredUsername() {
  if (typeof window === 'undefined') {
    return DEFAULT_USER.githubUsername
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_USER.githubUsername
  } catch {
    return DEFAULT_USER.githubUsername
  }
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => ({
    ...DEFAULT_USER,
    githubUsername: readStoredUsername(),
  }))

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, user.githubUsername)
  }, [user.githubUsername])

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
