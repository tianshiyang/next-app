import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/router';

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: '/',
    icon: <MailOutlined />,
  },
  {
    label: '路由传递',
    key: '/query/query',
    icon: <AppstoreOutlined />
  },
  {
    label: '通信',
    key: '/actions',
    icon: <SettingOutlined />,
    children: [
      {
        label: '父子传值',
        key: '/actions/actions',
      },
    ],
  }
];


export default function GlobleMenu({children}: {children: any}) {
  const router = useRouter()

  // 路由和菜单的Key对应
  const [current, setCurrent] = useState(router.pathname);

  // 路由调转方法
  const goMenuPage = (pathname: string) => {
    let query = pathname == "/query/query" ? { name: '李四', age: 22} : null
    router.push({
      pathname,
      query
    })
  }

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    goMenuPage(e.key)
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      {children}
    </>
  )
}