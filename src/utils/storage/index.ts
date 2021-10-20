/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/tusktalk
 * @Date: 2021-06-24 17:07:52
 * @LastEditTime: 2021-06-25 09:15:07
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Development\qucentSaasHtml\branches\v3\src\utils\storage\index.ts
 */
/**
 * 统一封装对外的接口
 */
import SessionStorageAPI from './sessionstorage'
import LocalStorageAPI from './localstorage'
import CookieAPI from './cookie'

export interface StorageType {
  set(key: string, value: string): void
  get(key: string): string
  remove(key: string): void
  setExpire?(key: string, value: string, expire: number): void
  getExpire?(key: string): string
}

export default (type?: string): StorageType => {
  let UseStore
  switch (type) {
    case 'session':
      UseStore = LocalStorageAPI
      break
    case 'cookie':
      UseStore = CookieAPI
      break
    case 'localstorage':
      UseStore = LocalStorageAPI
      break
    default:
      UseStore = SessionStorageAPI
      break
  }
  return new UseStore()
}
