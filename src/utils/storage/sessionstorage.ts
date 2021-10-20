/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/tusktalk
 * @Date: 2021-06-24 17:07:52
 * @LastEditTime: 2021-08-02 16:08:26
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Development\qucentSaasHtml\branches\v3\src\utils\storage\sessionstorage.ts
 */
/**
 * 存储封装对外提供统一的方法及接口使用
 * sessionStorage 存储到客户端
 */
import { StorageType } from './index'

class SessionStorageAPI implements StorageType {
  set(key: string, value: string): void {
    return sessionStorage.setItem(key, value)
  }

  get(key: string): string {
    return <string>sessionStorage.getItem(key)
  }

  remove(key: string): void {
    return sessionStorage.removeItem(key)
  }
}

export default SessionStorageAPI
