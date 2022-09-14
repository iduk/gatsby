import React from 'react'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Seo from '../components/seo'

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Seo title={frontmatter.title} />

      <section>
        <Link className="btn btn-primary btn-lg mb-3" to="/blog">
          Back to Blog
        </Link>
        <article>
          <div>
            <h1 className="font-normal">{frontmatter.title}</h1>
            <p className="py-2">{frontmatter.date}</p>
            <hr />
            <ul className={'tagList'} style={{ display: 'flex' }}>
              {frontmatter.tags?.map(tag => (
                <li key={tag + `tag`} className="p-2">
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
      </section>
    </div>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`
