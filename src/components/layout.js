import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import * as styles from './layout.module.scss'
import classNames from 'classnames/bind'
import Seo from './seo'
import ThemeContext from '../context/ThemeContext'
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
    // <ThemeContext.Consumer>
    //   {theme => (
    <div
      className={cx('layout')}
      // data-theme={theme.dark ? 'dark' : 'light'}
    >
      <Header siteTitle={pageTitle} />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()} CreateBy.
        <span>{data.site.siteMetadata.author}</span>
      </footer>
    </div>
    //   )}
    // </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Head = () => <Seo />

export default Layout
