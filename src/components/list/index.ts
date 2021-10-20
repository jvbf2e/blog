/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 16:06:53
 * @LastEditTime: 2021-10-18 14:46:17
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\list\index.ts
 */
import InternalList from './List'
import Item from './ListItem'

type InternalListType = typeof InternalList

interface ListType extends InternalListType {
  Item: typeof Item
}

const List = InternalList as ListType

List.Item = Item

export type { ListItemProps } from './ListItem'

export default List
