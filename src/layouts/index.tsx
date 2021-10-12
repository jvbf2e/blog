/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 11:03:22
 * @LastEditTime: 2021-10-11 17:03:04
 * @FilePath: \Developmente:\Joints\Project\blog\src\layouts\index.tsx
 */
import { IRouteComponentProps } from 'umi';

import WebsiteLayout from './website';
import ConsoleLayout from './console';

import '@/theme/index.less';

const Layout = ({ children }: IRouteComponentProps) => {
  if (true) {
    return <WebsiteLayout>{children}</WebsiteLayout>;
  }
  return <ConsoleLayout>{children}</ConsoleLayout>;
};

export default Layout;
