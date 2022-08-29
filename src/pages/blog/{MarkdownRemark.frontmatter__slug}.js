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
        블로그페이지 보기
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

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(truncate: true)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
      }
    }
  }
`
