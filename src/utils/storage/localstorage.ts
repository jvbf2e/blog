/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/tusktalk
 * @Date: 2021-07-13 09:25:52
 * @LastEditTime: 2021-08-02 16:08:14
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Development\qucentSaasHtml\branches\v3\src\utils\storage\localstorage.ts
 */
/**
 * 存储封装对外提供统一的方法及接口使用
 * Localstorage 存储到客户端
 */
import { StorageType } from './index'

class LocalStorageAPI implements StorageType {
  set(key: string, value: string): void {
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        throw new Error('Out of Memory Limit Localstorage')
      } else {
        throw new Error(e.name)
      }
    }
  }

  get(key: string): string {
    return <string>localStorage.getItem(key)
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }

  setExpire(key: string, value: string, expire: number): void {
    const currTime = new Date().getTime()
    return this.set(key, JSON.stringify({ val: value, time: currTime + expire }))
  }

  getExpire(key: string): string {
    const val: string = this.get(key)
    const dataObj = JSON.parse(val)
    if (new Date().getTime() - dataObj.time > 0) {
      return dataObj.val
    } else {
      return ''
    }
  }
}

export default LocalStorageAPI
