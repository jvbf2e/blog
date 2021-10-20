/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 14:20:59
 * @LastEditTime: 2021-10-19 10:22:34
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\list\ListItem.tsx
 */
import type { ObjType, UmiComponentProps } from '@/common/type'

import React from 'react'
import { Link } from 'umi'
import classNames from 'classnames'
import { tuple, tupleNum } from '@/common/type'
import filters from '@/utils/filters'

import ListContext from './Context'
import styles from './ListItem.less'

const Span = tupleNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24)
const Size = tuple('small', 'middle', 'large')

export interface ListItemProps {
  id: string
  avatar: string
  tags: number[]
  time: number
  title: string
  synopsis: string
  browses: number
  feature: string
  path: string
}

interface ListItemType {
  span?: typeof Span[number]
  size?: typeof Size[number]
  data: ListItemProps
  children: any
}

const ListItem = (props: ListItemType) => {
  const { span, size, data, children } = props
  const { id, avatar, time, title, feature, synopsis, browses, path } = data
  const { gutter, listCunt } = React.useContext(ListContext)

  const featureElement = (feature: string) => (feature ? <div className={styles.feature}>{feature}</div> : <></>)

  const avatarElement = (avatar: string) => (
    <>
      {avatar ? (
        <div className={styles.avatar}>
          {children.tag}
          <img className={styles.avatarImg} src={avatar} />
          {featureElement(feature)}
        </div>
      ) : (
        <></>
      )}
    </>
  )

  const containerElement = (bool: boolean = false) => (
    <div className={styles.container}>
      <div className={styles.extends}>
        <span className={styles.time}>{filters.timeFormat(time)}</span>
        {bool ? (
          <span className={styles.time}>
            <b>{browses}</b>
            <span> 浏览数</span>
          </span>
        ) : (
          <></>
        )}
      </div>
      <h2 className={styles.title}>{title}</h2>
      {bool ? <p className={styles.synopsis}>{synopsis}</p> : <></>}
    </div>
  )

  const contentElement = () => {
    let html
    switch (size) {
      case 'small':
        html = <>{avatarElement(avatar)}</>
        break
      case 'large':
        html = (
          <>
            {avatarElement(avatar)}
            {containerElement(true)}
          </>
        )
        break
      default:
        html = (
          <>
            {avatarElement(avatar)}
            {containerElement()}
          </>
        )
        break
    }
    return html
  }

  const mergedStyle: React.CSSProperties = {}
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2
    mergedStyle.paddingLeft = horizontalGutter
    mergedStyle.paddingRight = horizontalGutter
  }

  const classes = classNames(
    styles.wrap,
    span ? [styles.col, styles[`col-${span}`]] : listCunt ? [styles.col, styles[`col-${24 / listCunt}`]] : ''
  )

  return (
    <div className={classes} style={{ ...mergedStyle }}>
      {path ? (
        <Link className={styles.link} to={`${path}/${id}`}>
          {contentElement()}
        </Link>
      ) : (
        contentElement()
      )}
    </div>
  )
}

export default ListItem
