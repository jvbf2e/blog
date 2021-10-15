/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-12 16:36:43
 * @LastEditTime: 2021-10-15 14:31:32
 * @FilePath: \Developmente:\Joints\Project\blog\src\layouts\PrimaryLayout.tsx
 */
import { UmiComponentProps } from '@/common/type'

interface Props extends UmiComponentProps {}

const PrimaryLayout = (props: Props) => {
  const { children } = props
  return <div>{children}</div>
}

export default PrimaryLayout
