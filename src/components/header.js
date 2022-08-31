import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './header.module.scss'
import classNames from 'classnames/bind'
import ThemeToggle from './themeToggle'

const cx = classNames.bind(styles)

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
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
    <header className={cx('header', 'is-fluid')}>
      <ThemeToggle />
      <div className={cx('navbar')}>
        <Link to={'/'} className={cx('logo')}>
          {siteTitle}
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={cx('navTrigger', 'btn', 'btn-primary')}
        >
          menu
        </button>

        <nav className={cx('nav', `${menuOpen ? 'open' : ''}`)}>
          <div className={cx('navList')}>
            {navLinks.map(link => (
              <React.Fragment key={link.url}>
                <Link
                  className={cx('navLink')}
                  to={link.url}
                  activeClassName={cx('active')}
                >
                  {link.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
