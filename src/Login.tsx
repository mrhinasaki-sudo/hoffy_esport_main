import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//  User type
type User = {
  username?: string
  email: string
  password: string
}

//  Props type
type LoginProps = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export default function Login({ setUser }: LoginProps) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Get all users safely
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

    //  Find user by email + password
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    )

    if (foundUser) {
      alert('Login successful!')

      //  Save current logged-in user
      localStorage.setItem('currentUser', JSON.stringify(foundUser))

      //  Update React state
      setUser(foundUser)

      navigate('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}