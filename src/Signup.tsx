import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { User } from './App'

//  Props type
type SignupProps = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export default function Signup({ setUser }: SignupProps) {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()

    const newUser: User = { username, email, password }

    // Fix null issue
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

    // Type-safe check
    const exists = users.find(
      (user: User) =>
        user.email === email || user.username === username
    )

    if (exists) {
      alert('User already exists!')
      return
    }

    // Add new user
    users.push(newUser)

    // Save all users
    localStorage.setItem('users', JSON.stringify(users))

    // Save current logged-in user
    localStorage.setItem('currentUser', JSON.stringify(newUser))

    // Update React state
    setUser(newUser)

    alert('Account created!')
    navigate('/')
  }

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        {/* USERNAME */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Create Account</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}