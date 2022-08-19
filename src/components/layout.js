import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
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
  const pageTitle = data.site.siteMetadata?.title || 'iduk'
  return (
    <div className={cx('layoutBase')}>
      <header className={cx('l-header')}>
        <Header siteTitle={pageTitle} />
      </header>

      <main className={cx('l-container', `${className}`)}>{children}</main>

      <footer className={cx('l-footer')}>
        © {new Date().getFullYear()} &middot; CreateBy.
        {` `}
        <span>{data.site.siteMetadata.author}</span>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
