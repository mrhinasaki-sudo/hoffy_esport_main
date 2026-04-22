import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Home'
import Article from './Article'
import Login from './Login'
import Signup from './Signup'

export type User = {
  username?: string
  email: string
  password: string
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser} />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup setUser={setUser} />} />
    </Routes>
  )
}

export default App