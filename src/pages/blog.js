import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './blog.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  // const image = getImage(posts.thumbnail)

  return (
    <Layout>
      <ul className={cx('postList')}>
        {posts.map(post => (
          <li key={post.node.id} className={cx('postList__item')}>
            <div className={cx('postList__content')}>
              <Link to={post.node.fields.slug}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>{post.node.frontmatter.date}</p>
              <div className={cx('postList__excerpt')}>{post.node.excerpt}</div>
            </div>

            <div className={cx('postList__thumbnail')}>
              <Link to={post.node.fields.slug}>
                <img
                  src={
                    post.node.frontmatter.thumbnail?.childImageSharp?.fluid.src
                  }
                  alt="aaa"
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail {
              publicURL
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
