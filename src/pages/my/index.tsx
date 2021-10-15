/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-13 16:52:07
 * @LastEditTime: 2021-10-13 16:56:49
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\my\index.tsx
 */
import type { UmiComponentProps } from '@/common/type';

import styles from './index.less';

interface Props extends UmiComponentProps {}

const My = (props: Props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default My;
