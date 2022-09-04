import * as React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.slug}>
    <h4>{post.frontmatter.title}</h4>
    <p>{post.frontmatter.date}</p>
    <p>{post.excerpt}</p>
  </Link>
)

export default PostLink
