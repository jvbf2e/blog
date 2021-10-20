/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 14:46:44
 * @LastEditTime: 2021-10-18 16:20:39
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\grid\col.tsx
 */
import React from 'react'
import classNames from 'classnames'

import GridContext from './Context'

import styles from './col.less'

interface ColProps {
  span?: number
  children: any
}

const Col = (props: ColProps) => {
  const { span, children } = props
  const { gutter } = React.useContext(GridContext)

  const mergedStyle: React.CSSProperties = {}
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2
    mergedStyle.paddingLeft = horizontalGutter
    mergedStyle.paddingRight = horizontalGutter
  }

  const classes = classNames([styles.col, span ? styles[`col-${span}`] : ''])

  return (
    <div className={classes} style={{ ...mergedStyle }}>
      {children}
    </div>
  )
}

export default Col
