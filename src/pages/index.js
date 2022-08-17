import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import '../assets/scss/main.scss'

const samplePageLinks = [
  {
    text: 'Reference',
    url: 'reference',
    badge: true,
    description:
      'A simple example of linking to another page within a Gatsby site',
  },
  {
    text: 'About',
    url: 'about',
    badge: false,
    description:
      'A simple example of linking to another page within a Gatsby site',
  },
  { text: 'TypeScript', url: 'using-typescript' },
  { text: 'Server Side Rendering', url: 'using-ssr' },
  { text: 'Deferred Static Generation', url: 'using-dsg' },
]

const moreLinks = [
  { text: 'Join us on Discord', url: 'https://gatsby.dev/discord' },
  {
    text: 'Documentation',
    url: 'https://gatsbyjs.com/docs/',
  },
  {
    text: 'Starters',
    url: 'https://gatsbyjs.com/starters/',
  },
  {
    text: 'Showcase',
    url: 'https://gatsbyjs.com/showcase/',
  },
  {
    text: 'Contributing',
    url: 'https://www.gatsbyjs.com/contributing/',
  },
  { text: 'Issues', url: 'https://github.com/gatsbyjs/gatsby/issues' },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <StaticImage
        src="../assets/images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p>
        <b>Example pages:</b>
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>

    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
