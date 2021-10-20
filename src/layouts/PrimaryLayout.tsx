/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-12 16:36:43
 * @LastEditTime: 2021-10-19 10:42:40
 * @FilePath: \Developmente:\Joints\Project\blog\src\layouts\PrimaryLayout.tsx
 */
import type { UmiComponentProps } from '@/common/type'

import classNames from 'classnames'

import { Header, Footer } from './components'

interface Props extends UmiComponentProps {}

const PrimaryLayout = (props: Props) => {
  const { children } = props
  return (
    <>
      <Header />
      <div className={classNames('content')}>{children}</div>
      <Footer />
    </>
  )
}

export default PrimaryLayout
