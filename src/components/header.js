import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './header.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              url
            }
          }
        }
      }
    `
  )
  const navLinks = data.site.siteMetadata.menuLinks

  return (
    <div className={cx('navbar')}>
      <Link to={'/'} className={cx('logo')}>
        {siteTitle}
      </Link>

      <nav className={cx('nav')}>
        {navLinks.map(link => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.name}</Link>
          </React.Fragment>
        ))}
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
