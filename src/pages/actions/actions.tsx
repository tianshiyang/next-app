import GlobalMenu from "@/components/globalMenu/index"
import ActionsComponent from "@/components/action/index"
import { useState } from "react"

export default function ActionsPage() {

  const [ formValues, setFormValues ] = useState<{ username: string, password: string, remember: boolean }>({
    username: "父亲",
    password: "123",
    remember: false
  })

  // 子组件回掉函数
  const handleFormSubmit = (value: { username: string, password: string, remember: boolean }) => {
    setFormValues(value)
  }

  return (
    <>
      <GlobalMenu />
      <div className="title">子组件传来的数据：姓名: { formValues.username }, 密码: { formValues.password }, 是否记住我: { formValues.remember ? '是' : "否" }</div>
      <ActionsComponent formValues={formValues} handleFormSubmit={ handleFormSubmit }>
        <h1 slot="head">表单头部</h1>
        <h1 slot="footer">表单底部</h1>
      </ActionsComponent>
    </>
  )
}