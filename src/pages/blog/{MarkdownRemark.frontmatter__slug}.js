import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <Link className="btn text-primary" to="/blog">
        Back to Blog
      </Link>
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h5>{frontmatter.title}</h5>
          <p>{frontmatter.date}</p>
        </div>
      </header>

      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const BlogPostQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(format: PLAIN, pruneLength: 100, truncate: true)
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
