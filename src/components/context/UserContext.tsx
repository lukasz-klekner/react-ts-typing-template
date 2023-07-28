import React, { useState, createContext, useContext } from 'react'

interface AuthUser {
  name: string
  email: string
}

interface UserContext {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

interface UserContextProviderProps {
  children: React.ReactNode
}

const UserContext = createContext<UserContext | null>(null)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => {
  const authContext = useContext(UserContext)

  if (!authContext) {
    throw new Error('Missing AuthContext data!')
  }

  return authContext
}
