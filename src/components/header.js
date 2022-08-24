import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import ThemeContext from '../context/ThemeContext'
import * as styles from './header.module.scss'
import classNames from 'classnames/bind'
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
    <ThemeContext.Consumer>
      {theme => (
        <header className={cx('header', 'is-fluid')}>
          <div className={cx('navbar')}>
            <Link to={'/'} className={cx('logo')}>
              {siteTitle}
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cx('navTrigger', 'btn')}
            >
              menu
            </button>

            <nav className={cx('nav', `${menuOpen ? 'open' : ''}`)}>
              {navLinks.map(link => (
                <React.Fragment key={link.url}>
                  <Link className={cx('navLink')} to={link.url}>
                    {link.name}
                  </Link>
                </React.Fragment>
              ))}
            </nav>
          </div>
          <button className={cx('themeSwitch')} onClick={theme.toggleDark}>
            {theme.dark ? 'Light mode ☀' : 'Dark mode'}
          </button>
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
