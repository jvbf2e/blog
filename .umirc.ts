/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 10:58:07
 * @LastEditTime: 2021-10-15 16:57:20
 * @FilePath: \Developmente:\Joints\Project\blog\.umirc.ts
 */
import { defineConfig } from 'umi'

export default defineConfig({
  dva: {
    hmr: true
  },
  mock: {},
  mfsu: {},
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
  nodeModulesTransform: {
    type: 'none'
  },
  // routes: [{ path: '/', component: '@/layouts/index' }],
  lessLoader: {
    javascriptEnabled: true
  },
  cssLoader: {
    localsConvention: 'camelCase'
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'lodash'
    ]
  ],
  fastRefresh: {}
})
