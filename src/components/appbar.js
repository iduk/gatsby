import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './appbar.module.scss'
import classNames from 'classnames/bind'
import ThemeToggle from './themeToggle'
import pixelDuk from '../assets/images/pixelduk.svg'

const cx = classNames.bind(styles)

const Appbar = ({ siteTitle }) => {
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
    <div className="is-fluid">
      <ThemeToggle />
      <div className={cx('navbar')}>
        <Link to={'/'} className={cx('logo')} title={siteTitle}>
          <img src={pixelDuk} width={'100%'} alt="logo" />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={cx('navTrigger', 'btn', 'btn-primary')}
        >
          menu
        </button>

        <nav className={cx('nav', `${menuOpen ? 'open' : ''}`)}>
          <ul className={cx('navList')}>
            {navLinks.map(link => (
              <li key={link.url}>
                <Link
                  className={cx('navLink')}
                  to={link.url}
                  activeClassName={cx('active')}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

Appbar.propTypes = {
  siteTitle: PropTypes.string,
}

Appbar.defaultProps = {
  siteTitle: ``,
}

export default Appbar
