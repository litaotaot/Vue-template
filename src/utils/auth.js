import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'

export function getToken(TokenKey) {
  return Cookies.get(TokenKey)
}

export function setToken(TokenKey, token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey)
}

// md5加密
import crypto from 'crypto'
export function getmd5(str) {
  const md5 = crypto.createHash('md5')
  md5.update(str)
  let strnew = md5.digest('hex')
  strnew = strnew.substr(0, 10).toUpperCase() + strnew.substr(10)
  return strnew
}
export function getsha256(str) {
  const md5 = crypto.createHash('sha256')
  md5.update(str)
  return md5.digest('hex')
}

// 字符串base64和base64转字符串
export const base64 = {
  encode: (str) => {
    if (!str) return str
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1)
      }))
  },
  decode(str) {
    if (!str) return str
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }
}

// 带加密解密的cookie存储
export function getCookies(key) {
  const str = Cookies.get(base64.encode(key))
  return str && base64.decode(str)
}

export function setCookies(key, val) {
  return Cookies.set(base64.encode(key), base64.encode(val))
}

export function removeCookies(key) {
  return Cookies.remove(base64.encode(key))
}

