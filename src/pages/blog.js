import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { kebabCase } from 'lodash'
import * as styles from './blog.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout className={cx('blogPage')}>
      <ul className={cx('postList')}>
        {posts.map(post => (
          <li key={post.node.id} className={cx('postList__item')}>
            <div className={cx('postList__content')}>
              <div>
                <Link to={post.node.fields.slug}>
                  <h1 className={cx('title', 'font-normal')}>
                    {post.node.frontmatter.title}
                  </h1>
                </Link>
                <p className={cx('date')}>{post.node.frontmatter.date}</p>
                <p className={cx('excerpt')}>{post.node.excerpt}</p>
              </div>

              {/* Tags */}
              {post.node.frontmatter.tags ? (
                <div className={cx('tagsContainer')}>
                  <ul className={cx('tagList')}>
                    {post.node.frontmatter.tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className={cx('postList__thumbnail')}>
              <Link to={post.node.fields.slug}>
                <Img
                  fluid={
                    post.node.frontmatter.thumbnail?.childImageSharp?.fluid
                  }
                />
                {/* <img
                  src={
                    post.node.frontmatter.thumbnail?.childImageSharp?.fluid.src
                  }
                  alt="aaa"
                /> */}
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
          excerpt(format: PLAIN, pruneLength: 100, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD", locale: "ko-KR")
            title
            tags
            thumbnail {
              publicURL
              childImageSharp {
                fluid(maxWidth: 600) {
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
