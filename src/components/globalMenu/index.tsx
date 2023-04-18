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
    label: '页面组1',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  }
];


export default function GlobleMenu() {
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
    </>
  )
}