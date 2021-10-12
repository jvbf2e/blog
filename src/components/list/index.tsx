/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 17:11:53
 * @LastEditTime: 2021-10-12 10:08:52
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\list\index.tsx
 */
import type { ObjTypes } from '@/typings';

import { FC } from 'react';

import styles from './index.less';

type ListProps = {
  data: ObjTypes[];
};

const List: FC<ListProps> = (props) => {
  return (
    <div className={styles.list}>
      {props.data.map((item) => {
        return <div className={styles.listItem}>{item.name}</div>;
      })}
    </div>
  );
};

export default List;
