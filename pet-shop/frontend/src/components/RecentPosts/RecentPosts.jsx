import './RecentPosts.css'
import { recentPosts } from '../../assets/data'

const RecentPosts = () => {

  const recentPostsLimited = recentPosts.slice(0, 4);

  return (
    <div className='recent-posts'>
      <h2>Posts Recentes</h2>
      <p>Acompanhe nossas últimas publicações e mantenha-se atualizado com as novidades e informações mais recentes. Descubra conteúdos relevantes e interessantes que irão enriquecer sua jornada junto ao seu pet.</p>
      <div className="recent-post-container">
        {recentPostsLimited.map((post, index) => (
          <div className="recent-post" key={index}>
            <img src={post.image} alt={post.title} />
            <div className="post-info">
              <h3>{post.title}</h3>
              <p className='post-info-data'>{post.date}</p>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentPosts