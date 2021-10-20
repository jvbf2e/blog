/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-19 14:25:11
 * @LastEditTime: 2021-10-19 14:50:32
 * @FilePath: \Developmente:\Joints\Project\blog\src\api\index.ts
 */
import client from '@/utils/request'

const api = {
  homes: '/v1/homes',
  datasetField: '/v1/data-screen-custom/dataset-field'
}

export const datasetField = async (data) => client.post(api.datasetField, { data })
export const getHomes = async () => client.get(api.homes)

export default api
