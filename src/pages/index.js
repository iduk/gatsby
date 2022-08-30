import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const indexlist = [
  {
    id: 1,
    content:
      '라이너 토끼, 그리고 언덕 내 가을 까닭입니다. 패, 하나에 청춘이 옥 이름자 이름과 피어나듯이 어머니, 아스라히 봅니다...',
    thumb: 'https://source.unsplash.com/600x600/?app',
  },
  {
    id: 2,
    content:
      '걱정도 밤을 노루, 언덕 당신은 밤이 된 까닭입니다. 이름을 지나가는 쉬이 벌써 불러 둘 이름자 나는 까닭입니다. 지나가는 말 멀리 다 별 언덕 이름을 까닭입니다. 프랑시스 하나에 하나의 까닭입니다...',
    thumb: 'https://source.unsplash.com/600x600/?design',
  },
  {
    id: 3,
    content:
      '잔디가 아침이 오는 풀이 한 별을 까닭입니다. 이국 아침이 파란 하나의 까닭입니다.',
    thumb: 'https://source.unsplash.com/600x600/?nature',
  },
  {
    id: 4,
    content:
      '흙으로 이런 쉬이 까닭입니다. 나는 한 헤일 다 아름다운 쉬이 별을 별 이름과, 까닭입니다. 헤는 하나 하나에 이름과 봅니다. 마디씩 토끼, 아침이 까닭입니다.',
    thumb: 'https://source.unsplash.com/600x600/?city',
  },
  {
    id: 5,
    content:
      '하나에 새워 그리고 청춘이 새겨지는 흙으로 하나 이름을 봅니다. 아직 멀리 잔디가 딴은 하늘에는 까닭입니다. 하나에 다 무엇인지 벌써 묻힌 차 봅니다. 아스라히 계집애들의 이웃 별에도 묻힌 남은 것은 까닭입니다.',
    thumb: 'https://source.unsplash.com/600x600/?pattern',
  },
  {
    id: 6,
    content: '무덤 헤는 별 거외다. 마디씩 말 없이 헤는 덮어 밤이 까닭입니다.',
    thumb: 'https://source.unsplash.com/600x600/?notebook',
  },
  {
    id: 7,
    content:
      '언덕 둘 것은 내 별 못 때 밤이 쓸쓸함과 봅니다. 피어나듯이 아직 아름다운 된 아침이 토끼, 듯합니다. 비둘기, 겨울이 말 언덕 딴은 묻힌 까닭입니다.',
    thumb: 'https://source.unsplash.com/600x600/?mobile',
  },
  {
    id: 8,
    content:
      '무덤 추억과 아스라히 있습니다. 했던 나의 아름다운 거외다. 하나에 하나에 덮어 봅니다. 무엇인지 새겨지는 하늘에는 별 별을 무성할 계십니다.',
    thumb: 'https://source.unsplash.com/600x600/?office',
  },
  {
    id: 9,
    content:
      '무덤 추억과 아스라히 있습니다. 했던 나의 아름다운 거외다. 하나에 하나에 덮어 봅니다. 무엇인지 새겨지는 하늘에는 별 별을 무성할 계십니다.',
    thumb: 'https://source.unsplash.com/600x600/?tablet',
  },
  {
    id: 10,
    content:
      '무덤 추억과 아스라히 있습니다. 했던 나의 아름다운 거외다. 하나에 하나에 덮어 봅니다. 무엇인지 새겨지는 하늘에는 별 별을 무성할 계십니다.',
    thumb: 'https://source.unsplash.com/600x600/?program',
  },
]

const IndexPage = () => {
  // const [isHover, setIsHover] = React.useState()

  // React.useEffect(() => {

  // }, [])

  return (
    <Layout className={cx('index')}>
      <StaticImage
        src="../assets/images/3d_render@2x.png"
        loading="lazy"
        width={100}
        alt="aaa"
      />
      <section className="is-fluid">
        <ul className={cx('indexList')}>
          {indexlist.map(item => (
            <li key={item.id} className={cx('item')}>
              <h1>{item.id}</h1>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage
