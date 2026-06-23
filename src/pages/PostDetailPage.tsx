import { useParams, useNavigate } from "react-router";
import HeaderBlock from "../blocks/HeaderBlock";
import database from "../storage/database";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = database.posts.find((p) => p.id === Number(id)) ?? null;

  if (!post) return null;

  return (
    <>
      <HeaderBlock title={post.title} subtitle="" />
      <main className="partial" data-layout-structure="main">
        <div className="block" data-layout-structure="block">
          <div className="post post--detail" data-layout-structure="component">
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
            <button className="btn-delete" onClick={() => navigate(-1)}>
              ← Back
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
