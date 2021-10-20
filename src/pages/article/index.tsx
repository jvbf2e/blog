/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-19 10:59:37
 * @LastEditTime: 2021-10-19 11:02:59
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\article\index.tsx
 */
import { ObjType, UmiComponentProps } from '@/common/type'
import { ArticleListModelState } from './model'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'umi'

import styles from './index.less'
import { Card, Col, List, ListItemProps, Row } from '@/components'
import { isArray } from 'lodash'

enum tagEnum {
  'JavaScript',
  'React',
  'Vue'
}

const condition = [
  {
    key: 0,
    label: '全部',
    value: 0
  },
  {
    key: 1,
    label: 'Vue',
    value: 1
  },
  {
    key: 2,
    label: 'JavaScript',
    value: 2
  },
  {
    key: 3,
    label: 'React',
    value: 3
  }
]

interface ArticleListProps extends UmiComponentProps {}

const ArticleList = (props: ArticleListProps) => {
  const { ...options } = props

  const dispatch = useDispatch()
  const { list } = useSelector((state: ObjType): ArticleListModelState => state.articleList)

  // ===== Effect =====
  useEffect(() => {
    dispatch({ type: 'articleList/query', payload: { page: 1, pageSize: 13 } })
  }, [])

  // ===== Render =====
  const conditionElement = () => {
    return (
      <div className={styles.condition}>
        <span>文章</span>
        <div className={styles.menu}>
          {condition.map((item, index) => (
            <span key={item.key} className={classNames([styles.item, index === 0 ? styles.action : ''])}>
              {item.label}
            </span>
          ))}
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
    const bigNumes = [0]
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
    <div className={styles[`list-wrap`]}>
      {conditionElement()}
      <div className={styles.list}>{listsElement('Vue', list)}</div>
    </div>
  )
}

export default ArticleList
