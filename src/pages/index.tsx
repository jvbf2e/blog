/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 10:58:07
 * @LastEditTime: 2021-10-15 17:10:03
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\index.tsx
 */
import type { UmiComponentProps } from '@/common/type'
import type { ListItemProps } from '@/components'

import { connect, ConnectRC } from 'umi'

import { Card, List } from '@/components'
import Layout from './components'

import styles from './index.less'

interface Props extends UmiComponentProps {}

const IndexPage: ConnectRC<Props> = (props) => {
  // 初始化数据
  const lists: ListItemProps[] = [
    {
      avatar: '',
      tags: [1],
      time: 1634197863241,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididut',
      synopsis: '',
      browses: 12,
      feature: '',
      path: '/'
    }
  ]

  // Api
  const Apis = {
    getNews: () => {
      props.dispatch({ type: 'index/query' })
    }
  }

  Apis.getNews()

  const bannerElement = () => {
    return (
      <div className={styles.banner}>
        <Layout.Header />
        <div className={styles.msg}>
          <p>Meet our community</p>
          <p>The best blogging platform about anime, technology and development.</p>
          <button className={styles.button}>Get started</button>
        </div>
      </div>
    )
  }

  const listsElement = (title: string, rows: ListItemProps[]) => {
    return (
      <div>
        <Card title={title}>
          <List.Item {...lists[0]}></List.Item>
        </Card>
      </div>
    )
  }

  return (
    <div className={styles.layout}>
      {bannerElement()}
      <div className={styles.content}>
        {listsElement('World', lists)}
        {listsElement('World', lists)}
        <Layout.Footer />
      </div>
    </div>
  )
}

export default connect()(IndexPage)
