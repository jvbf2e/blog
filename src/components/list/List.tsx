/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 17:11:53
 * @LastEditTime: 2021-10-14 17:05:52
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\list\list.tsx
 */
import type { UmiComponentProps } from '@/common/type';

import styles from './List.less';

export interface ListProps extends UmiComponentProps {}

const List = (props: ListProps) => {
  const { children } = props;
  return <div className={styles.list}>{children}</div>;
};

export default List;
