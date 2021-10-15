/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 14:20:59
 * @LastEditTime: 2021-10-14 17:07:12
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\list\listItem.tsx
 */
import type { FC } from 'react';

import { Link } from 'umi';

import styles from './ListItem.less';

enum tagEnum {
  'JavaScript',
  'React',
  'Vue',
}

export interface ListItemProps {
  avatar: string;
  tags: number[];
  time: number;
  title: string;
  synopsis: string;
  browses: number;
  feature: string;
  path: string;
}

const ListItem: FC<ListItemProps> = (props) => {
  const { avatar, time, title, tags, path } = props;

  const tagsElement = (tags: number[]) => {
    return (
      <div className={styles.tagWrap}>
        {tags.map((item) => {
          <span className={styles.tag}>{tagEnum[item]}</span>;
        })}
      </div>
    );
  };

  const avatarElement = (avatar: string) => {
    return (
      <>
        {avatar ? (
          <div className={styles.avatar}>
            {tagsElement(tags)}
            <img className={styles.avatarImg} src={avatar} />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const containerElement = () => {
    return (
      <div className={styles.container}>
        <div>
          <span>{time}</span>
        </div>
        <h2>{title}</h2>
      </div>
    );
  };

  return (
    <Link to={path}>
      <div className={styles.wrap}>
        {avatarElement(avatar)}
        {containerElement()}
      </div>
    </Link>
  );
};

export default ListItem;
