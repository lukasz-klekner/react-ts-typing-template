import { useAuth } from './context/UserContext'

export const User = () => {
  const { user, setUser } = useAuth()

  const handleLogin = () => {
    setUser({
      name: 'Łukiiii',
      email: 'luki94@gmail.com',
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}
