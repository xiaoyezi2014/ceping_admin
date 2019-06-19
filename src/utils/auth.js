import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const TokenUid = 'Admin-Uid'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setUid(uid) {
  return Cookies.set(TokenUid, uid)
}

export function getUid() {
  return Cookies.get(TokenUid)
}

export function removeToken() {
  Cookies.remove(TokenKey)
  return Cookies.remove(TokenKey)
}
