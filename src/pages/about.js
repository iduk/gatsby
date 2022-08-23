import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './about.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const About = () => {
  return (
    <Layout>
      <h1 className={cx('test')}>About</h1>
      <p>about page</p>
      <Link to="/">홈화면</Link>

      <StaticImage
        src="../assets/images/example.png"
        loading="eager"
        width={100}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt=""
      />
    </Layout>
  )
}

export default About
