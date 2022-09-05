import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './about.module.scss'
import classNames from 'classnames/bind'
import Seo from '../components/seo'
const cx = classNames.bind(styles)

const About = () => {
  return (
    <Layout>
      <h1 className={cx('test')}>About</h1>
      <p>about page</p>
      <Link to="/">홈화면</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="ABOUT" />

export default About
