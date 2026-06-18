import type { Post } from '../types/post.types'

interface Props {
  post: Post
  onDelete: (id: number) => void
}

export default function PostCard({ post, onDelete }: Props) {
  const { id, title, body, tags, reactions, views } = post
  return (
    <div className="post" data-layout-structure="component">
      <h4 className="post-title-text">{title}</h4>
      <p className="post-body">{body}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="post-meta">
        <div className="post-reactions">
          <span className="reaction">
            👍 <strong>{reactions.likes}</strong>
          </span>
          <span className="reaction">
            👎 <strong>{reactions.dislikes}</strong>
          </span>
        </div>
        <span className="post-views">👁 {views.toLocaleString()} views</span>
      </div>
      <button className="btn-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  )
}
