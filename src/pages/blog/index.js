import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import * as styles from './blog.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const PostsList = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <li key={edge.node.id} style={{ padding: '1rem 0' }}>
        <Link to={edge.node.frontmatter.slug} className={cx('postLink')}>
          <h4>{edge.node.frontmatter.title}</h4>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
        </Link>
      </li>
    ))

  return (
    <Layout>
      <div className="is-fluid">
        <ul className={cx('postList')}>{PostsList}</ul>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title={`보관함`} />
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
