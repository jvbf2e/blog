/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 11:03:22
 * @LastEditTime: 2021-10-12 17:38:16
 * @FilePath: \Developmente:\Joints\Project\blog\src\layouts\index.tsx
 */
import type { UmiComponentProps } from '@/common/type';

import PrimaryLayout from './PrimaryLayout';
import PublicLayout from './PublicLayout';
import BaseLayout from './BaseLayout';

import '@/theme/index.less';

const LAYOUT_MAP = {
  public: PublicLayout,
  primary: PrimaryLayout,
};

interface Props extends UmiComponentProps {}

const Layout = (props: Props) => {
  const { children, ...options } = props;
  return <BaseLayout {...options}>{children}</BaseLayout>;
};

export default Layout;
