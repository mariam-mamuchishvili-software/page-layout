import { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'
import PaginationBlock from './PaginationBlock'
import { getPosts } from '../services/api'

export default function PostsBlock({ title = 'Latest Posts', icon = 'article' }) {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    getPosts(page).then((data) => {
      setPosts(data.posts)
      setTotalPages(data.totalPages)
    })
  }, [page])

  return (
    <div className="posts-block" data-layout-structure="block" data-media="container">
      <h3 className="block-header post-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <div className="posts-wrapper">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <PaginationBlock page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}
