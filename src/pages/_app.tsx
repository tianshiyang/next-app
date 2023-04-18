import type { AppProps } from 'next/app'
import "@/styles/index.css"
import 'antd/dist/reset.css';
// import "@/styles/index600.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
