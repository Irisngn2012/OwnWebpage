import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './BlogPost.css'

const postFiles = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' })
const imageFiles = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true, import: 'default' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const meta = {}
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(':')
    if (idx > -1) {
      const key = line.slice(0, idx).trim()
      const val = line.slice(idx + 1).trim()
      meta[key] = val
    }
  })

  return { meta, content: match[2] }
}

export function getAllPosts() {
  return Object.entries(postFiles)
    .map(([path, raw]) => {
      const slug = path.split('/').pop().replace('.md', '')
      const { meta, content } = parseFrontmatter(raw)
      return { slug, content, ...meta }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

const BlogPost = () => {
  const { slug } = useParams()
  const posts = getAllPosts()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="page">
        <div className="page-header">
          <h1 className="page-title">Post Not Found</h1>
          <Link to="/posts" className="back-link">← Back to Posts</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <Link to="/posts" className="back-link">← Back to Posts</Link>
        <div className="post-meta-header">
          <span className="post-category">{post.category}</span>
          <span className="post-date">{post.date}</span>
          <span className="post-readtime">{post.readTime}</span>
        </div>
        <h1 className="page-title">{post.title}</h1>
      </div>

      <div className="page-content">
        <article className="blog-article">
          <ReactMarkdown
            components={{
              img: ({ src, alt, ...props }) => {
                const match = Object.entries(imageFiles).find(([path]) => path.includes(src))
                const resolvedSrc = match ? match[1] : src
                return <img src={resolvedSrc} alt={alt} {...props} />
              }
            }}
          >{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  )
}

export default BlogPost
