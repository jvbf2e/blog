/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-12 14:26:13
 * @LastEditTime: 2021-10-12 15:27:57
 * @FilePath: \Developmente:\Joints\Project\blog\.cz-config.js
 */
module.exports = {
  types: [
    { value: '🧪init', name: '🧪init:    初始提交' },
    { value: '✨feat', name: '✨feat:    增加新功能' },
    { value: '🩹fix', name: '🩹fix:    修复bug' },
    { value: '🌈ui', name: '🌈ui:    更新UI' },
    { value: '♻️refactor', name: '♻️refactor:    代码重构' },
    { value: '🚀release', name: '🚀release:    发布' },
    { value: '🔑deploy', name: '🔑deploy:    部署' },
    { value: '📝docs', name: '📝docs:    修改文档' },
    { value: '🔧test', name: '🔧test:    增删测试' },
    { value: '📌chore', name: '📌chore:    更改配置文件' },
    { value: '💄style', name: '💄style:    样式修改不影响逻辑' },
    { value: '📕revert', name: '📕revert:    版本回退' },
    { value: '💍add', name: '💍add:    添加依赖' },
    { value: '🔖minus', name: '🔖minus:    版本回退' },
    { value: '🍵del', name: '🍵del:    删除代码/文件' },
  ],
  scopes: [],
  messages: {
    type: '选择更改类型:\n',
    scope: '更改的范围:\n',
    // 如果allowcustomscopes为true，则使用
    customScope: '表示此变更的范围:\n',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的issues列表. E.g.: #31, #34:\n',
    confirmCommit: '确认提交?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};
