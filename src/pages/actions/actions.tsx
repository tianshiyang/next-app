// import GlobalMenu from "@/components/globalMenu/index"
import ActionsComponent from "@/components/action/index"
import { useState, useRef } from "react"
import { Button, Modal } from "antd"

export default function ActionsPage() {

  const [ formValues, setFormValues ] = useState<{ username: string, password: string, remember: boolean }>({
    username: "父亲",
    password: "123",
    remember: false
  })

  const ActionsComponentRef = useRef(null)

  // 子组件回掉函数
  const handleFormSubmit = (value: { username: string, password: string, remember: boolean }) => {
    setFormValues(value)
  }

  // 父组件调用子组件方法
  const handleUseChildEvent = () => {
    (ActionsComponentRef.current as any).click()
  }

  return (
    <>
      <div className="title">子组件传来的数据：姓名: { formValues.username }, 密码: { formValues.password }, 是否记住我: { formValues.remember ? '是' : "否" }</div>
      <Button type="primary" onClick={ handleUseChildEvent }>调用子组件方法</Button>
      <ActionsComponent ref={ ActionsComponentRef } formValues={formValues} handleFormSubmit={ handleFormSubmit }>
        <h1 slot="head">表单头部</h1>
        <h1 slot="footer">表单底部</h1>
      </ActionsComponent>
    </>
  )
}