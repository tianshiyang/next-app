import type { AppProps } from 'next/app'
import "@/styles/index.css"
import 'antd/dist/reset.css';
import GlobalMenu from '@/components/globalMenu/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalMenu>
      <Component {...pageProps} />
    </GlobalMenu>
    </>
  )
}
