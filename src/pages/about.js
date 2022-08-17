import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from './about.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const About = () => (
  <Layout className={cx('aboutPage')}>
    <h1 className={cx('test')}>About</h1>
    <p>about page</p>
    <Link to="/">홈화면</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default About
