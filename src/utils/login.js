import request from "./request";
export function login(wrod, pass) {
  return request({
    url: `/login?account=${wrod}&password=${pass}`,
  })
}
