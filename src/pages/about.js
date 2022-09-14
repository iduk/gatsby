import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './about.module.scss'
import classNames from 'classnames/bind'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
const cx = classNames.bind(styles)

const AboutPage = () => {
  return (
    <Layout className={cx('aboutPage')}>
      <div className="is-fluid">
        <h1 className="pb-6">
          Non enim praesent elementum facilisis leo vel fringilla est
          ullamcorper. Nec ultrices dui sapien eget mi. Convallis convallis
          tellus id interdum.
        </h1>
        <section className="row">
          <div className="col-12 col-lg-6 text-l">
            <StaticImage
              src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
              width={600}
              layout="constrained"
              alt="image"
            />
          </div>
          <div className="col-12 col-lg-6">
            <article className={cx('article')}>
              <p className="mb-4">
                Non enim praesent elementum facilisis leo vel fringilla est
                ullamcorper. Nec ultrices dui sapien eget mi. Convallis
                convallis tellus id interdum. Suspendisse in est ante in nibh
                mauris cursus mattis. Fermentum iaculis eu non diam. Accumsan
                sit amet nulla facilisi morbi tempus iaculis urna id. Fermentum
                et sollicitudin ac orci phasellus. Enim nulla aliquet porttitor
                lacus luctus accumsan tortor. At varius vel pharetra vel. Amet
                consectetur adipiscing elit duis tristique sollicitudin nibh.
                Molestie at elementum eu facilisis sed odio. Egestas erat
                imperdiet sed euismod nisi. Netus et malesuada fames ac turpis
                egestas integer eget. Tortor at auctor urna nunc. Et molestie ac
                feugiat sed lectus vestibulum mattis ullamcorper velit. Lorem
                ipsum dolor sit amet consectetur adipiscing elit. Malesuada
                proin libero nunc consequat interdum. Vitae et leo duis ut diam
                quam nulla porttitor. Congue mauris rhoncus aenean vel elit
                scelerisque mauris pellentesque pulvinar.
              </p>
              <p>
                Non enim praesent elementum facilisis leo vel fringilla est
                ullamcorper. Nec ultrices dui sapien eget mi. Convallis
                convallis tellus id interdum. Suspendisse in est ante in nibh
                mauris cursus mattis. Fermentum iaculis eu non diam. Accumsan
                sit amet nulla facilisi morbi tempus iaculis urna id. Fermentum
                et sollicitudin ac orci phasellus. Enim nulla aliquet porttitor
                lacus luctus accumsan tortor. At varius vel pharetra vel. Amet
                consectetur adipiscing elit duis tristique sollicitudin nibh.
                Molestie at elementum eu facilisis sed odio. Egestas erat
                imperdiet sed euismod nisi. Netus et malesuada fames ac turpis
                egestas integer eget. Tortor at auctor urna nunc. Et molestie ac
                feugiat sed lectus vestibulum mattis ullamcorper velit. Lorem
                ipsum dolor sit amet consectetur adipiscing elit. Malesuada
                proin libero nunc consequat interdum. Vitae et leo duis ut diam
                quam nulla porttitor. Congue mauris rhoncus aenean vel elit
                scelerisque mauris pellentesque pulvinar.
              </p>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="ABOUT" />

export default AboutPage
