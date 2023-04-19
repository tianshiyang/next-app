import request from "@/config/request"

export function getUser(params: any): Promise<any> {
  return request({
    url: "http://localhost:4000/users/login",
    method: "get",
    params
  })
}
