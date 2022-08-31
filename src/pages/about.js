import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './about.module.scss'
import classNames from 'classnames/bind'
import pixelImage from '../assets/images/pixelduk.svg'

const cx = classNames.bind(styles)

const About = () => {
  return (
    <Layout>
      <h1 className={cx('test')}>About</h1>
      <p>about page</p>
      <Link to="/">홈화면</Link>

      <div className={cx('pixelated')}>
        <StaticImage
          loading="lazy"
          src="../assets/images/macbook.png"
          width={300}
          alt=""
        />
      </div>
      <div className={cx('css_3d')}>
        <img className={cx('pixel')} src={pixelImage} alt="lalala" />
      </div>
    </Layout>
  )
}

export default About
