/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 13:49:02
 * @LastEditTime: 2021-10-12 10:40:08
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\components\footer\index.tsx
 */
import { FC } from 'react';

import styles from './index.less';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>top</div>
      <div className={styles.bottom}>bottom</div>
    </div>
  );
};

export default Footer;
