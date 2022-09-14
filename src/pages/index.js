import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
import indexData from '../api/indexData.json'
const cx = classNames.bind(styles)

const IndexPage = ({ data }) => {
  // const image = data.all.edges.node

  return (
    <Layout className={cx('index')}>
      <section className="is-fluid">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 pb-5">
            <article className={cx('intro')}>
              <h6>Welcome to LetsBy Website.</h6>
              <p className="my-3">
                Nulla dolor ante, facilisis ornare mi eget, lobortis pretium
                dolor. Vestibulum molestie lobortis pellentesque. Nam dictum,
                lacus sed eleifend consectetur, est nibh placerat tellus, in
                laoreet neque metus in purus. Aliquam iaculis nunc vel dapibus
                aliquet. Donec non sapien aliquet, luctus arcu eget, luctus
                libero. Praesent faucibus accumsan consequat. Ut sit amet
                viverra urna. Etiam sit amet semper turpis, at vestibulum urna.
                <br />
                <br />
                Cras consectetur, lorem sit amet facilisis accumsan, leo nisi
                accumsan ex, ut placerat urna arcu quis neque. Curabitur in nunc
                eget ex facilisis dictum.
              </p>
              <div className="text-sm">
                <p>2022 Letsby Blog Website</p>
                <p>All Rights Reserved.</p>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <ul className={cx('indexWrap')}>
              {indexData.map(item => (
                <li key={item.id} className={cx('list')}>
                  <img src={item.thumb} alt="" />
                  {/* <GatsbyImage image={image} alt={item.id} /> */}
                  {/* {item.id === 3 && (
                    <StaticImage
                      src={'../assets/images/pixelduk.png'}
                      layout="fullWidth"
                      aspectRatio={'4/3'}
                      alt={'image'}
                      loading={'lazy'}
                    />
                  )} */}
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

// export const allMyNodes = graphql`
//   query {
//     allMyNodes {
//       edges {
//         node {
//           id
//           imageUrl
//         }
//       }
//     }
//   }
// `
