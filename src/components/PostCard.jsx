export default function PostCard({ post, onDelete }) {
  return (
    <div className="post" data-layout-structure="component">
      <h4 className="post-title-text">{post.title}</h4>
      <p className="post-body">{post.body}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="post-meta">
        <div className="post-reactions">
          <span className="reaction">
            👍 <strong>{post.reactions.likes}</strong>
          </span>
          <span className="reaction">
            👎 <strong>{post.reactions.dislikes}</strong>
          </span>
        </div>
        <span className="post-views">
          👁 {post.views.toLocaleString()} views
        </span>
      </div>
      <button className="btn-delete" onClick={() => onDelete(post.id)}>
        Delete
      </button>
    </div>
  );
}
