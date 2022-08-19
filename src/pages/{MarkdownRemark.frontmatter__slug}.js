import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <Link to="/blog">블로그페이지 보기</Link>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5>{frontmatter.title}</h5>
        <p>{frontmatter.date}</p>
      </header>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
      }
    }
  }
`
