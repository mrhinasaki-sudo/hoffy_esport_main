import { Link } from 'react-router-dom'
import cs2 from './assets/cs2.png'
import lol from './assets/lol.png'
import valorant from './assets/valorant.png'
import './App.css'

type User = {
  username?: string
  email: string
  password: string
}

type HomeProps = {
  user: User | null
  setUser: (user: User | null) => void
}

const news = [
  {
    id: 0,
    title: "CS2 Major Announced",
    category: "CS2",
    description: "Valve confirms a new Major tournament with a massive prize pool.",
    image: cs2,
  },
  {
    id: 1,
    title: "LoL Worlds Update",
    category: "League of Legends",
    description: "New format changes revealed for Worlds 2026.",
    image: lol,
  },
  {
    id: 2,
    title: "Valorant Patch Notes",
    category: "Valorant",
    description: "Agents receive major balance updates in the latest patch.",
    image: valorant,
  }
]

export default function Home({ user, setUser }: HomeProps) {

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setUser(null)
  }

  return (
    <>
      <header className="main-header">

        {/* LEFT */}
        <div className="nav-left">
          <h1>EsportNews</h1>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/article/0">CS2</Link>
          <Link to="/article/1">LoL</Link>
          <Link to="/article/2">Valorant</Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          {user ? (
            <>
              <span className="user-name">
                👤 {user.username || user.email}
              </span>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>

      </header>

      <div className="container">
        <h1 className="news-title">NEWS</h1>

        <div className="news-grid">
          {news.map(item => (
            <Link to={`/article/${item.id}`} key={item.id} className="news-card">
              
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="play-button">▶</div>
              </div>

              <span className="tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

            </Link>
          ))}
        </div>
      </div>

      <footer>
        © 2026 HoffyEsport
      </footer>
    </>
  )
}