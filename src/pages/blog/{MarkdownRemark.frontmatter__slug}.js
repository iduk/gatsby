import * as React from 'react'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
import Seo from '../../components/seo'

export default function BlogPost({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark
  // const imageData = getImage(frontmatter.featuredImage)

  return (
    <>
      <Seo title={frontmatter.title} />
      <Link className="btn btn-primary btn-lg mb-3" to="/blog">
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
    </>
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
