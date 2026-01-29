import './PageStyles.css'

const Posts = () => {
  const posts = [

  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Posts</h1>
        <p className="page-subtitle">Thoughts, tutorials, and stories</p>
      </div>

      <div className="page-content">
        <div className="posts-list">
          {posts.map((post) => (
            <article key={post.id} className="post-card">
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
                  <a href="#" className="post-link">Read More →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Posts
