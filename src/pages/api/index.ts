import request from "@/config/request"

export function getUser(params: any): Promise<any> {
  return request({
    url: "https://www.fastmock.site/mock/8dd5c3c7ba80603039e6e9275375a24f/api/user/login",
    method: "get",
    params
  })
}
