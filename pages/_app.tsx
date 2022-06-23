import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import Layout from '../components/layout'
import 'aos/dist/aos.css';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';  
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from "@mui/core";

const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light' as PaletteMode,
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
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
      fontWeight: 300,
      fontSize: 18
    },
    body2: {
      fontWeight: 600
    },
    button: {
      fontWeight: 600,
    }
    }
}));
const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark' as PaletteMode
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
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
      fontWeight: 300,
      fontSize: 18
    },
    body2: {
      fontWeight: 600
    },
    button: {
      fontWeight: 600,
    }
    }
}));

const themeOptions = {
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
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
      fontWeight: 300,
      fontSize: 18
    },
    body2: {
      fontWeight: 600
    },
    button: {
      fontWeight: 600,
    }
    }
};
let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);
function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = () => setIsDarkTheme(!isDarkTheme);
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 600,
      delay:80
    })
  }, [])
  
  const toggleColorScheme = () => {
    switch (document.documentElement.getAttribute('color-mode')) {
      case "dark":
        document.documentElement.setAttribute("color-mode", "light");
        setIsDarkTheme(false);
        break;
      case "light":
        document.documentElement.setAttribute("color-mode", "dark");
        setIsDarkTheme(true);
        break;
      default:
        document.documentElement.setAttribute("color-mode", "dark");
        setIsDarkTheme(true);
        break;
    }
    
  }

  const toggleColorSchemeLight = () => {
    document.documentElement.setAttribute("color-mode", "light");
    setIsDarkTheme(false);
  }
  const toggleColorSchemeDark = () => {
    document.documentElement.setAttribute("color-mode", "dark");
    setIsDarkTheme(true);
  }
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
    <Layout toggleColorScheme={toggleColorScheme} toggleColorSchemeLight={toggleColorSchemeLight} toggleColorSchemeDark={toggleColorSchemeDark}>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}

export default MyApp
