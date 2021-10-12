/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 11:11:42
 * @LastEditTime: 2021-10-11 13:40:11
 * @FilePath: \Developmente:\Joints\Project\blog\src\layouts\website\index.tsx
 */
import { Component } from 'react';
import { IRouteComponentProps } from 'umi';

export default class WebsiteLayout extends Component {
  constructor(props: IRouteComponentProps) {
    super(props);
  }
  render() {
    return <>{this.props.children}</>;
  }
}
