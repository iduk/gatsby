import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
import data from '../api/indexData.json'
const cx = classNames.bind(styles)

const IndexPage = () => {
  return (
    <Layout className={cx('index')}>
      <section className="is-fluid">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2 pb-5">
            <h6>Welcome to LetsBy Website.</h6>
            <p className="my-3 text-sm">
              Nulla dolor ante, facilisis ornare mi eget, lobortis pretium
              dolor. Vestibulum molestie lobortis pellentesque. Nam dictum,
              lacus sed eleifend consectetur, est nibh placerat tellus, in
              laoreet neque metus in purus. Aliquam iaculis nunc vel dapibus
              aliquet. Donec non sapien aliquet, luctus arcu eget, luctus
              libero. Praesent faucibus accumsan consequat. Ut sit amet viverra
              urna. Etiam sit amet semper turpis, at vestibulum urna.
            </p>
            <p>
              Cras consectetur, lorem sit amet facilisis accumsan, leo nisi
              accumsan ex, ut placerat urna arcu quis neque. Curabitur in nunc
              eget ex facilisis dictum.
            </p>
          </div>
          <div className="col-12 col-md-9 col-lg-10">
            <ul className={cx('indexWrap')}>
              {data.map(item => (
                <li key={item.id} className={cx('list')}>
                  {item.id !== 3 && (
                    <StaticImage
                      src={`../assets/images/3d_render.avif`}
                      layout="fullWidth"
                      aspectRatio={'3/2'}
                      className={cx('staticImg')}
                      alt={'image'}
                      loading={'lazy'}
                    />
                  )}
                  {
                    item.id === 3 && null
                    // <StaticImage
                    //   src={'../assets/images/pixelduk.png'}
                    //   layout="fullWidth"
                    //   aspectRatio={'3/2'}
                    //   alt={'image'}
                    // />
                  }
                  <div data={item.id} className={cx('item')}></div>
                  <div className={cx('content')}>
                    <h1 className={cx('title')}>{item.id}</h1>
                    <p>{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
