import request from "./request";

export function _getBanner() {
  return request({
    url: '/banner'
  })
}
export function getClub() {
  return request({
    url: '/cludhot'
  })
}