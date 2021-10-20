/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 11:09:26
 * @LastEditTime: 2021-10-19 11:02:21
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\article\[id]\index.tsx
 */
import type { ObjType, UmiComponentProps } from '@/common/type'

import { useEffect } from 'react'
import { useDispatch, useSelector  } from 'umi'

import filters from '@/utils/filters'
import { ArticleModelState } from './model'

import { Row, Col } from '@/components'

import styles from './index.less'

enum tagEnum {
  'JavaScript',
  'React',
  'Vue'
}

interface ArticleProps extends UmiComponentProps {}

const article = (props: ArticleProps) => {
  const { match } = props
  const {params} = match
  console.log(match )
  const { ...options } = props
  const dispatch = useDispatch()
  const { avatar, title, tags, context, feature, time, browses } = useSelector(
    (state: ObjType): ArticleModelState => state.article
  )

  // ===== Effect =====
  useEffect(() => {
    dispatch({ type: 'article/query', payload: params })
  }, [])

  // ===== Render =====
  const featureElement = (feature: string) => (feature ? <div className={styles.feature}>{feature}</div> : <></>)

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

  const avatarElement = () => (
    <div className={styles.avatar}>
      {tagsElement(tags)}
      {avatar ? <img className={styles.avatarImg} src={avatar} /> : <></>}
      {featureElement(feature)}
    </div>
  )

  const containerElement = () => (
    <div className={styles.container}>
      <div className={styles.extends}>
        <span className={styles.time}>{filters.timeFormat(time)}</span>
        <span className={styles.time}>
          <b>{browses}</b>
          <span> 浏览数</span>
        </span>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )

  const contextElement = () => (
    <>
      <Row gutter={[24, 24]} {...options}>
        <Col span={18} {...options}>
          {avatarElement()}
          {containerElement()}
          <div className={styles.context} dangerouslySetInnerHTML={{ __html: context }}></div>
        </Col>
        <Col span={6} {...options}></Col>
      </Row>
      <div className={styles.like}></div>
    </>
  )

  return <div className={styles.article}>{contextElement()}</div>
}

export default article
