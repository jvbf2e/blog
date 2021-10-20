/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-13 16:52:07
 * @LastEditTime: 2021-10-19 10:59:07
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\home\index.tsx
 */
import type { ObjType, UmiComponentProps } from '@/common/type'
import type { ListItemProps } from '@/components'
import type { HomeModelState } from './model'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'umi'
import { isArray } from 'lodash'

import { Card, List, Row, Col } from '@/components'
import { Header, Footer } from '@/layouts/components'

import styles from './index.less'

enum tagEnum {
  'JavaScript',
  'React',
  'Vue'
}

interface Props extends UmiComponentProps {}

const HomePage = (props: Props) => {
  const { ...options } = props

  const dispatch = useDispatch()
  const { list, banner } = useSelector((state: ObjType): HomeModelState => state.home)

  // ===== Effect =====
  useEffect(() => {
    dispatch({ type: 'home/query' })
  }, [])

  // ===== Render =====
  const bannerElement = () => {
    return (
      <div className={styles.banner} style={{ backgroundImage: `url("${banner.img}")` }}>
        <Header bool={false} />
        <div className={styles.msg}>
          <p>{banner.title}</p>
          <p>{banner.msg}</p>
          <button className={styles.button}>Get started</button>
        </div>
      </div>
    )
  }

  const tagsElement = (tags: number[]) => (
    <div className={styles.tagWrap}>
      {tags.map((item, index) => {
        return (
          <span className={styles.tag} key={index}>
            {tagEnum[item]}
          </span>
        )
      })}
    </div>
  )

  /**
   * 4列：（第一列：3条数据；第二列：2条数据）
   * @param bigIndexs
   * @param rows
   */
  const setListFun = (bigIndexs: number[], rows: ObjType[], num: number = 4) => {
    const data = [] as any[]
    const size = [] as number[]
    if (rows.length === 0) return { data, size }
    let nodes = [] as ObjType[]
    let count = 0
    rows.forEach((row, index) => {
      if (bigIndexs.includes(index) || bigIndexs.length - count === 0) {
        data.push(row)
        if (bigIndexs.includes(index)) {
          size.push(data.length - 1)
        }
      } else {
        nodes.push(row)
      }
      if (nodes.length === num || rows.length === index) {
        data.push(nodes)
        nodes = []
        count++
      }
    })
    return { data, size }
  }
  const listsElement = (title: string, rows: ListItemProps[]) => {
    const bigNumes = [0, 5]
    const setList = setListFun(bigNumes, rows)
    return (
      <Card title={title}>
        <Row direction="row" gutter={[24, 24]} {...options}>
          {setList.data.map((row, index) => {
            return (
              <Col key={index} span={setList.size.includes(index) ? 12 : isArray(row) ? 12 : 6} {...options}>
                {isArray(row) ? (
                  <Row direction="row" gutter={[24, 24]} {...options}>
                    {row.map((node) => (
                      <Col key={node.id} span={12} {...options}>
                        <List.Item key={node.id} size={'middle'} data={node}>
                          {{
                            tag: tagsElement(node.tags)
                          }}
                        </List.Item>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <List.Item key={row.id} size={setList.size.includes(index) ? 'large' : 'middle'} data={row}>
                    {{
                      tag: tagsElement(row.tags)
                    }}
                  </List.Item>
                )}
              </Col>
            )
          })}
        </Row>
      </Card>
    )
  }

  return (
    <div className={styles.layout}>
      {bannerElement()}
      <div className={styles.content}>
        {listsElement('World', list)}
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
