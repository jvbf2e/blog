/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 14:20:59
 * @LastEditTime: 2021-10-17 18:02:46
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\list\ListItem.tsx
 */
import type { ObjType } from '@/common/type'

import React from 'react'
import { Link } from 'umi'
import ListContext from './Context'
import { tupleNum } from '@/common/type'

import styles from './ListItem.less'
import classNames from 'classnames'

enum tagEnum {
  'JavaScript',
  'React',
  'Vue'
}

const Span = tupleNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24)

export interface ListItemProps {
  span?: typeof Span
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

const ListItem = (props: ObjType) => {
  const { span, avatar, time, title, tags, feature, path } = props
  const { gutter, listCunt } = React.useContext(ListContext)

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

  const featureElement = (feature: string) => (feature ? <div className={styles.feature}>{feature}</div> : <></>)

  const avatarElement = (avatar: string) => (
    <>
      {avatar ? (
        <div className={styles.avatar}>
          {tagsElement(tags)}
          <img className={styles.avatarImg} src={avatar} />
          {featureElement(feature)}
        </div>
      ) : (
        <></>
      )}
    </>
  )

  const containerElement = () => (
    <div className={styles.container}>
      <div>
        <span>{time}</span>
      </div>
      <h2>{title}</h2>
    </div>
  )

  const contentElement = () => (
    <>
      {avatarElement(avatar)}
      {containerElement()}
    </>
  )

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
      {path ? <Link to={path}>{contentElement()}</Link> : contentElement()}
    </div>
  )
}

export default ListItem
