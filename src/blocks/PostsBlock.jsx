import { useState } from "react";
import PostCard from "../components/PostCard";
import PaginationBlock from "./PaginationBlock";

const POSTS_PER_PAGE = 2;

export default function PostsBlock({
  title = "Latest Posts",
  icon = "article",
  posts = [],
  onDelete,
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filteredPosts = posts.filter((post) => {
    const q = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.body.toLowerCase().includes(q) ||
      post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  function handleQueryChange(newQuery) {
    setQuery(newQuery);
    setPage(1);
  }

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div
      className="posts-block"
      data-layout-structure="block"
      data-media="container"
    >
      <h3 className="block-header post-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <div className="search-block">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Search posts…"
        />
      </div>
      <div className="posts-wrapper">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={onDelete} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="search-empty">No posts match "{query}"</p>
        )}
      </div>
      <PaginationBlock page={safePage} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
