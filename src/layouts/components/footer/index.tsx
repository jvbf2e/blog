/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 13:49:02
 * @LastEditTime: 2021-10-12 10:40:08
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\components\footer\index.tsx
 */
import { FC } from 'react'
import classNames from 'classnames'

import styles from './index.less'

const Footer: FC = () => {
  return (
    <div className={classNames(styles.footer, 'content')}>
      <div className={styles.top}>
        <span>LOGO</span>
        <div>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <span>&copy;vvimo.com all rights reserved</span>
        </div>
        <div>
          <span>Privacy policy</span>
          <span>Terns of use</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
