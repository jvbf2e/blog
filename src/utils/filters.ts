/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/tusktalk
 * @Date: 2021-06-24 16:59:53
 * @LastEditTime: 2021-10-18 10:07:49
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Joints\Project\blog\src\utils\filters.ts
 */
// 引入tools下的过滤函数
import { multiply, divide, priceFilter, textTohtml, handleImage, decimalFormat, dateFormat, timeFormat } from './tools'

export enum FilterKey {
  multiply = 'multiply',
  divide = 'divide',
  priceFilter = 'priceFilter',
  textTohtml = 'textTohtml',
  handleImage = 'handleImage',
  dateFormat = 'dateFormat',
  decimalFormat = 'decimalFormat',
  timeFormat = 'timeFormat'
}

class FunctionType extends Function {}

export type FilterType = {
  [key in FilterKey]: FunctionType
}

const filters: FilterType = {
  multiply,
  divide,
  priceFilter,
  textTohtml,
  handleImage,
  decimalFormat,
  dateFormat,
  timeFormat
}

export default filters
