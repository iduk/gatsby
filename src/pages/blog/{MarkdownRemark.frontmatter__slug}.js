import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html, featuredImage } = markdownRemark
  const imageData = getImage(frontmatter.featuredImage)

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

      {/* <GatsbyImage image={imageData} alt={frontmatter.title} /> */}
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
`
