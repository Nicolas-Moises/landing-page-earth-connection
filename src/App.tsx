import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify";

import Aos from "aos";
import 'aos/dist/aos.css';

import 'react-toastify/dist/ReactToastify.min.css'

import { useEffect } from "react";

export function App() {

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

