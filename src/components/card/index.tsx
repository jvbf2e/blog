/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 16:12:56
 * @LastEditTime: 2021-10-11 16:53:12
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\card\index.tsx
 */
import { FC } from 'react';

import styles from './index.less';

interface PropTypes {
  title: string;
}

const Card: FC<PropTypes> = ({ children, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;
