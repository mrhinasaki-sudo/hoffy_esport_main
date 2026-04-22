import { useParams, Link } from 'react-router-dom'
import cs2 from './assets/cs2.png'
import lol from './assets/lol.png'
import valorant from './assets/valorant.png'
import './App.css'

const news = [
  {
    id: 0,
    title: "PGL Cluj-Napoca 2026",
    category: "CS2",
    image: cs2,
    fullText: [
      "Results of PGL Cluj-Napoca 2026.",
      "The BT Arena has witnessed an incredible playoff stage, and the grand finalists for PGL Cluj-Napoca 2026 have been decided.",
      "Vitality and PARIVISION will face off in a Best of 5 showdown to claim the championship trophy and the lion’s share of the $1,250,000 prize pool."
    ]
  },
  {
    id: 1,
    title: "LoL Worlds Update",
    category: "League of Legends",
    image: lol,
    fullText: [
      "League of Legends Worlds is the biggest esports tournament of the year.",
      "Top teams from around the world compete for the championship title.",
      "This year promises intense matches and unforgettable moments."
    ]
  },
  {
    id: 2,
    title: "Valorant Patch Notes",
    category: "Valorant",
    image: valorant,
    fullText: [
      "The latest Valorant patch introduces balance changes.",
      "Several agents have been adjusted to improve gameplay.",
      "Bug fixes and performance improvements are also included."
    ]
  }
]

export default function Article() {
  const { id } = useParams()
  const article = news.find(n => n.id === Number(id))

  if (!article) return <p>Article not found</p>

  return (
    <div className={`article-page ${article.category === "CS2" ? "cs2-font" : ""}`}>

      {/* BACK BUTTON */}
      <header className="article-header">
        <Link to="/">← Back to Home</Link>
      </header>

      {/* HERO IMAGE */}
      <div className="article-hero">
        <img src={article.image} alt={article.title} />
      </div>

      {/* CONTENT CARD */}
      <div className="article-content">
        <p className="article-meta">
          {article.category} • March 2026
        </p>

        <h1>{article.title}</h1>

        <p className="article-sub">
          Latest updates and insights from the esports scene.
        </p>

        {/* YOUR PARAGRAPHS (kept) */}
        {article.fullText.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

    </div>
  )
}