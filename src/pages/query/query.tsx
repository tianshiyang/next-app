import { useRouter } from "next/router"
import Head from 'next/head'

export default function query() {
  const router = useRouter()
  const query = router.query
  return (
    <>
      <Head>
        <title>测试页面</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="testH1">这是测试页面</h1>
        <h2>路由中的参数 -- 姓名 {query.name} -- 年龄 {query.age} </h2>
      </main>
    </>
  )
}