import * as React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../../components/post-link'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const PostsList = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div>{PostsList}</div>
    </Layout>
  )
}
export const Head = () => <Seo title="My Blog Posts" />
export default Blog

export const AllBlogPosts = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(format: PLAIN, pruneLength: 100, truncate: true)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD", locale: "ko-KR")
            slug
          }
        }
      }
    }
  }
`
