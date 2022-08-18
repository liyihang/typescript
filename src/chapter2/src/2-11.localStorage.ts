export default class MyLocalStorage {
  /**
   * 
   * @param key 
   * @param value 
   */
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  /**
   * 
   * @param key 
   * @returns 
   */
  public getItem(key: string) {
    let value = localStorage.getItem(key)
    return value !== null ? JSON.parse(value) : null
  }
}