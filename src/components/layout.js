import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Seo from './seo'
import * as styles from './layout.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `)
  const pageTitle = data.site.siteMetadata?.title
  return (
    <div className={cx('layout', `${className}`)}>
      <Header siteTitle={pageTitle} />

      <main>{children}</main>

      {/* <footer>
        © {new Date().getFullYear()} CreateBy.
        <span>{data.site.siteMetadata.author}</span>
      </footer> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Head = () => <Seo />

export default Layout
