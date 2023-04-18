import { Form, Input, Button, Checkbox, Select } from 'antd';
import { useState } from 'react';

interface FormValues {
  username: string
  password: string
  remember: boolean
  address?: string
}

export default function Action({ formValues, handleFormSubmit, children} : { formValues: FormValues, handleFormSubmit: (value: FormValues) => void, children: any }) {
  const [formValuesState, setFormValueState] = useState(formValues)

  const renderHeader = () => {
    return (
      <>
        { children.filter((res: any) => res.props.slot == "head") }
      </>
    )
  }

  const renderFooter = () => {
    return (
      <>
        { children.filter((res: any) => res.props.slot == "footer") }
      </>
    )
  }

  const onFinish = (values: any) => {
    handleFormSubmit(values)
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
      <div className="m20 red-border">
        { renderHeader() }
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名称!' }]}
            initialValue={formValuesState.username}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item 
            label="地址"
            name="address"
            initialValue="lucy"
          >
            <Select
              style={{ width: 120 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
        { renderFooter() }
      </div>
    </>
  )
}