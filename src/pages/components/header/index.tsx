/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 13:43:06
 * @LastEditTime: 2021-10-11 16:54:23
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\components\header\index.tsx
 */
import { FC } from 'react';
import { NavLink } from 'umi';

import styles from './index.less';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <NavLink to="/" className={styles.logo}>
          <span>LOGO</span>
        </NavLink>
      </div>
      <div className={styles.right}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink to="/">首页</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/">文章</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/">关于</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
