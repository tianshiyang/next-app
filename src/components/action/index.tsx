import { Input, message } from 'antd';
import { useState } from 'react';

export default function Action({ message: string = "这是子组件的默认数据" }) {
  const [messageState, setMessageState] = useState(message)
  return (
    <>
      <Input defaultValue={messageState as unknown as string}></Input>
    </>
  )
}