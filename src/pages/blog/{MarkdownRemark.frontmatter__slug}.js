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
  query BlogPostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(format: PLAIN, pruneLength: 100, truncate: true)
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD", locale: "ko-KR")
        slug
      }
    }
  }
`
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       excerpt(format: PLAIN, pruneLength: 100, truncate: true)
//       frontmatter {
//         title
//         cover
//         date(formatString: "MMMM DD, YYYY", locale: "ko-KR")
//         categories
//         tags
//         slug
//       }
//     }
//   }
// `
