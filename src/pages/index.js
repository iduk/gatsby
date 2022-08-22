import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import '../assets/scss/main.scss'

const IndexPage = () => (
  <Layout>
    <div>
      <StaticImage
        src="../assets/images/example.png"
        loading="eager"
        width={100}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>

      <div className="is-fluid">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-3 col-lg-6">
            <div className="bg-primary">000</div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-6">
            <div className="bg-primary">000</div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-6">
            <div className="bg-primary">000</div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-6">
            <div className="bg-primary">000</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
