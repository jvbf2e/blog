/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 11:23:04
 * @LastEditTime: 2021-10-11 11:23:04
 * @FilePath: \Developmente:\Joints\Project\blog\src\layouts\console\index.tsx
 */
import { Component } from 'react';

export default class ConsoleLayout extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
