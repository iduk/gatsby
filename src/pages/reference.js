import * as React from 'react'
import Layout from '../components/layout'
import * as styles from './reference.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Reference = () => (
  <Layout className={cx('referencePage')}>
    <h5 className={cx('test')}>래퍼런스</h5>
    <p>래퍼런스를 찾으십니까?</p>
  </Layout>
)

export default Reference
