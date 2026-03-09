import { Link } from 'react-router-dom'
import { getAllPosts } from './BlogPost'
import './PageStyles.css'

const Posts = () => {
  const posts = getAllPosts()

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Posts</h1>
        <p className="page-subtitle">Thoughts, tutorials, and stories</p>
      </div>

      <div className="page-content">
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '60px 0' }}>
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="posts-list">
            {posts.map((post) => (
              <Link to={`/posts/${post.slug}`} key={post.slug} className="post-card" style={{ textDecoration: 'none' }}>
                <div className="post-image"></div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <span className="post-readtime">{post.readTime}</span>
                    <span className="post-link">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Posts
