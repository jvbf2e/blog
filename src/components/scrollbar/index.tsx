/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-12 10:43:34
 * @LastEditTime: 2021-10-14 13:40:30
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\scrollbar\index.tsx
 */
import type { FC } from 'react';

import Bar from './bar';

import styles from './index.less';

const Scrollbar: FC = () => {
  return (
    <div className={styles.scrollbar}>
      <div>
        <div></div>
      </div>
      <div>
        <Bar></Bar>
      </div>
    </div>
  );
};

export default Scrollbar;
