import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import Layout from '../components/layout'
import 'aos/dist/aos.css';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';  

const themeOptions = {
  typography: {
    fontFamily: "Heebo, sans-serif",
    textTransform: "none",
    fontWeight:300,
    h1: {
      fontWeight: 100,
      "@media (max-width: 400px)": { fontSize: "46px" }
    },
    h2: {
      fontWeight: 100,
      "@media (max-width: 400px)": { fontSize: "30px" }
    },
    h3: {
      fontWeight: 100,
      "@media (max-width: 400px)": { fontSize: "20px" }
    },
    h4: {
      fontWeight: 100
    },
    h5: {
      fontWeight: 100
    },
    h6: {
      fontWeight: 100
    },
    body1: {
      fontWeight: 400,
      fontSize: 18
    },
    body2: {
      fontWeight: 400
    },
    button: {
      fontWeight: 300,
    }
    }
};
let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 600
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}

export default MyApp
