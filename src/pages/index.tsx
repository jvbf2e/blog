/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 10:58:07
 * @LastEditTime: 2021-10-12 10:40:33
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\index.tsx
 */
import type { ObjTypes } from '@/typings';

import { Card, List } from '@/components';
import Layout from './components';

import styles from './index.less';

type ListProps = {
  data: ObjTypes[];
};

const IndexPage = () => {
  const banner = () => {
    return (
      <div className={styles.banner}>
        <Layout.Header />
        <div className={styles.msg}>
          <p>Meet our community</p>
          <p>
            The best blogging platform about anime, technology and development.
          </p>
          <button className={styles.button}>Get started</button>
        </div>
      </div>
    );
  };

  const lists = (title: string, listProps: ListProps) => {
    return (
      <div>
        <Card title={title}>
          <List {...listProps} />
        </Card>
      </div>
    );
  };

  return (
    <div className={styles.layout}>
      {banner()}
      <div className={styles.content}>
        {lists('World', { data: [{ name: 'a' }, { name: 'b' }] })}
        {lists('World', { data: [{ name: 'a' }, { name: 'b' }] })}
        <Layout.Footer />
      </div>
    </div>
  );
};

IndexPage.title = 'World';

export default IndexPage;
