import Head from 'next/head'
import GlobleMenu from '@/components/globalMenu'
import { useRouter } from "next/router"
import { Button, Space, Result } from 'antd';
import { useEffect, useState } from "react"
import { getUser } from "./api/index"


function Home({ user: { message } }: { user: { message: string } }) {

  function IsPhone() {
    var info = navigator.userAgent;
    // 通过正则表达式的test方法判断是否包含“Mobile”字符串
    var isPhone = /mobile/i.test(info);
    // 如果包含“Mobile”（是手机设备）则返回true
    return isPhone;
  }

  useEffect(() => {
    if (IsPhone()) {
      // location.href = "https://www.baidu.com"
    }
  }, [])

  const [messageState, setMessageState] = useState(message)

  const [ count, setCount ] = useState(1)

  useEffect(() => {
    getUser({name: 1}).then((res) => {
      setMessageState(res.message)
    })
  }, [count])

  const renderResponseView = () => {
    return (
      <>
        <Result
          status="success"
          title="数据请求成功！"
          subTitle={`服务端: ${ messageState }`}
        />
      </>
    )
  }
  
  const handleCountAdd = () => {
    setCount(count + 1) 
  }

  const router = useRouter()

  const goTestPage = () => {
    router.push({
      pathname: "/query/query",
      query: {
        name: "zhangsan",
        age: 22
      }
    })
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GlobleMenu />
        <Space wrap className='m20'>
          <Button type="primary" onClick={ goTestPage }>跳转到「路由传参」</Button>
          <Button type="primary" danger onClick={ handleCountAdd }>Count</Button>
        </Space>
        { renderResponseView() }
      </main>
    </>
  )
}

export async function getStaticProps() {
  let user = await getUser({ name: "zhangsan"})
  return {
    props: {
      user,
    },
    revalidate: 10, // In seconds
  }
}

export default Home