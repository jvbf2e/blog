/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 10:58:07
 * @LastEditTime: 2021-10-17 18:03:12
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\index.tsx
 */
import type { ObjType, UmiComponentProps } from '@/common/type'
import type { ListItemProps } from '@/components'
import type { IndexModelState } from './model'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'umi'

import { Card, List } from '@/components'
import Layout from './components'

import styles from './index.less'

interface Props extends UmiComponentProps {}

const IndexPage = (props: Props) => {
  const { ...options } = props

  const dispatch = useDispatch()
  const { list, banner } = useSelector((state: ObjType): IndexModelState => state.index)

  // ===== Effect =====
  useEffect(() => {
    dispatch({ type: 'index/query' })
  }, [])

  // ===== Render =====
  const bannerElement = () => {
    return (
      <div className={styles.banner} style={{ backgroundImage: `url("${banner.img}")` }}>
        <Layout.Header />
        <div className={styles.msg}>
          <p>{banner.title}</p>
          <p>{banner.msg}</p>
          <button className={styles.button}>Get started</button>
        </div>
      </div>
    )
  }

  const listsElement = (title: string, rows: ListItemProps[]) => {
    return (
      <div>
        <Card title={title}>
          <List direction="row" gutter={[24, 24]} listCunt={4} {...options}>
            {rows.map((row) => (
              <List.Item key={row.id} {...row}></List.Item>
            ))}
          </List>
        </Card>
      </div>
    )
  }

  return (
    <div className={styles.layout}>
      {bannerElement()}
      <div className={styles.content}>
        {listsElement('World', list)}
        <Layout.Footer />
      </div>
    </div>
  )
}

export default IndexPage
