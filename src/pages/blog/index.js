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
    .map(edge => (
      <li key={edge.node.id} style={{ padding: '1rem 0' }}>
        <PostLink post={edge.node} />
      </li>
    ))

  return (
    <Layout>
      <ul>{PostsList}</ul>
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
            date(formatString: "YYYYMMDD", locale: "ko-KR")
            slug
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
