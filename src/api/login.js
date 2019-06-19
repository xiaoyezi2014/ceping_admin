import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user_login',
    method: 'post',
    data: data
  })
}

export function getInfo(data) {
  return request({
    url: '/api/manager_account',
    method: 'post',
    data: data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
