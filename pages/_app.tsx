import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import Layout from '../components/layout'
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 600
    })
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
