/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 10:58:07
 * @LastEditTime: 2021-10-11 11:29:13
 * @FilePath: \Developmente:\Joints\Project\blog\.umirc.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [{ path: '/', component: '@/layouts/index' }],
  fastRefresh: {},
});
