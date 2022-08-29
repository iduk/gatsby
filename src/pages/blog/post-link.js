import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <div>
    <Link to={`${post.frontmatter.slug}`}>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p>{post.excerpt}</p>
    </Link>
  </div>
)

export default PostLink
