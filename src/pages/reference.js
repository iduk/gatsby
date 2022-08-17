import * as React from 'react'
import Layout from '../components/layout'
import * as styles from './reference.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Reference = () => (
  <Layout className={cx('referencePage')}>
    <div>
      <h1>레풔뤈스</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default Reference
