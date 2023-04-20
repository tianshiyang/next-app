import request from "@/config/request"

export function getUser(params: any): Promise<any> {
  return request({
    url: "http://172.28.6.184:4000/users/login",
    method: "get",
    params
  })
}
