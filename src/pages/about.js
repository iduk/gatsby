import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
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
        loading="lazy"
        src="../assets/images/pixelduk.png"
        width={300}
        alt=""
      />
    </Layout>
  )
}

export default About
